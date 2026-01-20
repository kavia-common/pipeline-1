import puppeteer from 'puppeteer';
import lighthouse from 'lighthouse';

async function runLighthouse(url) {
  const browser = await puppeteer.launch({
    headless: "new",
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  })
  const page = await browser.newPage();
  await page.goto(url);

  const report = await lighthouse(page.url(), { port: (new URL(browser.wsEndpoint())).port }, null);

  await browser.close();

  return report
}

function validateReport(report) {
  const {lhr} = report

  const minimum = 0.8
  let exit = false

  console.log(`Lighthouse scores\n\nMinimum score: ${minimum}\n`);

  const scores = Object.values(lhr.categories)
  scores.forEach(({title, score}) => {
    const isFail = score < minimum
    if(isFail) exit = true
    console.log(`${title}: ${score}${isFail ? ' - FAIL': ""}`)
  })

  if(exit) process.exit(1)
}

const url = 'http://localhost:3000';

const report = await runLighthouse(url)

validateReport(report)

