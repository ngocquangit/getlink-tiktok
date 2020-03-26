const puppeteer = require('puppeteer');

module.exports.down = (req, res) => {
  res.render('index');
};
module.exports.postdown = function(req, res) {
  const linkTitok = req.body.link;
  console.log(linkTitok);
  (async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    const url = 'https://downloadtiktokvideos.com/#url=' + linkTitok;
    await page.goto(url);
    await page.waitFor(5000);

    await console.log('Loading...' + linkTitok);
    const imgLinks = await page.evaluate(() => {
      let videoElement = document.querySelector('source');
      return videoElement.getAttribute('src');
    });
    await browser.close();
  })();
};
