const { chromium } = require('playwright');

async function scrapeReddit(subreddit) {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
  });
  const page = await context.newPage();
  const url = `https://old.reddit.com/r/${subreddit}/top/?t=week`;
  const results = [];

  try {
    console.log(`Navigating to ${url}`);
    await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 });
    await page.waitForTimeout(3000);

    const posts = await page.evaluate(() => {
      const items = document.querySelectorAll('.thing');
      const data = [];
      items.forEach(item => {
        const titleEl = item.querySelector('a.title');
        const linkEl = item.querySelector('a[href]');
        const scoreEl = item.querySelector('.score');
        const commentsEl = item.querySelector('.comments');
        const subredditEl = item.querySelector('.subreddit');

        if (titleEl) {
          const url = titleEl.href;
          // Convert old.reddit.com to www.reddit.com
          const normalizedUrl = url.replace('old.reddit.com', 'www.reddit.com');

          data.push({
            title: titleEl.textContent.trim(),
            url: normalizedUrl,
            score: scoreEl ? scoreEl.textContent.trim() : '0',
            comments: commentsEl ? commentsEl.textContent.trim() : '0',
            subreddit: subredditEl ? subredditEl.textContent.trim() : subreddit
          });
        }
      });
      return data;
    });

    results.push(...posts.slice(0, 10));
    console.log(`Found ${posts.length} posts in r/${subreddit}`);

    await page.waitForTimeout(2000);

  } catch (error) {
    console.error(`Error scraping ${subreddit}:`, error.message);
  }

  await browser.close();
  return results;
}

async function main() {
  const subreddits = ['LocalLLaMA', 'MachineLearning', 'artificial'];
  const allResults = {};

  for (const subreddit of subreddits) {
    console.log(`\nScraping r/${subreddit}...`);
    allResults[subreddit] = await scrapeReddit(subreddit);
  }

  console.log('\n=== FINAL RESULTS ===');
  console.log(JSON.stringify(allResults, null, 2));
}

main().catch(console.error);
