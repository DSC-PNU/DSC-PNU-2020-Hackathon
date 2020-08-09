const getPatchNote = async (page, href, target) => {
  await page.goto(href);
  const content = await page.$eval(target, (element) => {
    return element.innerHTML;
  });
  return content;
};

module.exports = { getPatchNote };
