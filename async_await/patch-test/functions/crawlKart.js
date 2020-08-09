const puppeteer = require('puppeteer');

const KartPatch = require('../models/KartPatch');
const { getPatchNote } = require('./getPatchNote.js');

const runPuppeteer = async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  try {
    await page.goto('http://kart.nexon.com/Kart/News/Patch/List.aspx');

    const contents = await page.$$eval('.tit_bx', (elements) => {
      return elements.map((element) => {
        const href = element.children[0].href;
        const id = href.match(/\d{5}/)[0];
        const title = element.textContent.trim();
        return [id, href, title];
      });
    });

    await KartPatch.findOne({}, { index: 1 }, async (err, result) => {
      if (err) console.log(err);
      else {
        const lastNumber = result.index;
        console.log(lastNumber);

        const pageIndex = contents.findIndex((con) => {
          return Number(con[0]) === lastNumber;
        });

        const lastPages = contents.slice(0, pageIndex);

        const patches = [];
        for (let i = 0; i < lastPages.length; i++) {
          patches.push(
            await getPatchNote(page, lastPages[i][1], '.board_imgarea')
          );
        }

        for (let i = 0; i < lastPages.length; i++) {
          const index = lastPages[i][0];
          const title = lastPages[i][2];
          const content = patches[i];

          let newKartPatch = new KartPatch({ index, title, content });
          console.log('Create 완료');

          newKartPatch
            .save()
            .then((newPatch) => {
              console.log(newPatch);
              console.log('저장완료');
            })
            .catch((err) => {
              console.log(err);
            });
        }

        console.log('Successfully Finished Scrapping [Kartrider]');
      }
    })
      .sort({ index: -1 })
      .limit(1);
  } catch (e) {
    console.log('KARTRIDER ERROR =>');
    console.error(e);
  } finally {
    await page.waitFor(2000);
    await browser.close();
  }
};

// const getPatchNote = async (page, href) => {
//   await page.goto(href);
//   const content = await page.$eval('.board_imgarea', (element) => {
//     return element.innerHTML;
//   });
//   return content;
// };

module.exports = runPuppeteer;
