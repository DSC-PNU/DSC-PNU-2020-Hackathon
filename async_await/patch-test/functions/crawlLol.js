const puppeteer = require('puppeteer');
const LolPatch = require('../models/LolPatch');
const { getPatchNote } = require('./getPatchNote.js');

const runPupperteer = async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  try {
    await page.setDefaultNavigationTimeout(0);

    await page.goto('http://www.inven.co.kr/board/lol/3329');

    const contents = await page.$$eval('.sj_ln', (elements) => {
      return elements.map((element) => {
        const href = element.href;
        const id = element.parentNode.previousSibling.textContent;
        const title = element.textContent.trim();
        return [id, href, title];
      });
    });

    await LolPatch.findOne({}, { index: 1 }, async function (err, result) {
      if (err) {
        console.log(err);
      } else {
        const lastNumber = result.index;
        console.log(lastNumber);

        const pageIndex = contents.findIndex((con) => {
          return Number(con[0]) === lastNumber;
        });

        const lastPages = contents.slice(0, pageIndex);

        const patches = [];
        // 최근 패치들을 담음.
        for (let i = 0; i < lastPages.length; i++) {
          patches.push(
            await getPatchNote(page, lastPages[i][1], '#powerbbsContent')
          );
        }
        console.log(lastPages);
        console.log(
          `patches.length : ${patches.length}, lastNumber : ${lastNumber}, pageIndex : ${pageIndex}`
        );
        // console.log(patches);
        for (let i = 0; i < lastPages.length; i++) {
          const index = lastPages[i][0];
          const title = lastPages[i][2];
          const content = patches[i];
          let newLolPatch = new LolPatch({ index, title, content });
          console.log('Create 완료');

          newLolPatch
            .save()
            .then((newPatch) => {
              console.log(newPatch);
              console.log('저장완료');
            })
            .catch((err) => {
              console.log(err);
            });
        }
        console.log('Successfully Finished Scrapping [League of Legend]');
      }
    })
      .sort({ index: -1 })
      .limit(1);
  } catch (e) {
    console.log('LOL ERROR =>');
    console.error(e);
  } finally {
    await page.waitFor(2000);
    await browser.close();
  }
};

// const getPatchNote = async (page, href) => {
//   await page.goto(href);
//   const content = await page.$eval('#powerbbsContent', (element) => {
//     return element.innerHTML;
//   });
//   return content;
// };

module.exports = runPupperteer;
