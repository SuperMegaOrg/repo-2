const puppeteer = require('puppeteer');

async function harvestProd() {
  let browser = await puppeteer.launch({
    args: ["--no-sandbox"]
  });
  const page = await browser.newPage();
  page.setDefaultNavigationTimeout(60000);
  await page.goto('https://goblincalcium.site/', {waitUntil: 'load'});
 // await page.type('#email', 'qatesting+lighthouse@getharvest.com');
//  await page.type('#password', '6_p-q_pm2TUgkt42HAtDMw!aimfXCFjK');
//  await page.click('#log-in');
  //await page.waitForNavigation({ waitUntil: 'networkidle2' });
}
module.exports = harvestProd;
