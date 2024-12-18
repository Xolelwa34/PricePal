import puppeteer from "puppeteer";

const scrapeStore = async (url) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);

  const data = await page.evaluate(() => {
    const items = [];
    document.querySelectorAll(".product-item").forEach((item) => {
      const name = item.querySelector(".product-title").textContent;
      const price = item.querySelector(".product-price").textContent;
      items.push({ name, price });
    });
    return items;
  });

  await browser.close();
  return data;
};

export default scrapeStore;

