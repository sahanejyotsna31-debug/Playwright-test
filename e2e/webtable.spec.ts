import { test } from '@playwright/test';

test('webtable test', async ({ page }) => {
  await page.goto('https://demoqa.com/webtables');

  const rows = page.locator('table tbody tr');
  console.log('Row Counts:' + (await rows.count()));

  const columns = page.locator('table thead th');
  console.log('column Counts:' + (await columns.count()));

  const firstRowValue = rows.first();
  console.log(await firstRowValue.innerText());

  const cell = firstRowValue.locator('td');
  console.log(await cell.nth(0).innerText());
  console.log(await cell.nth(1).innerText());
  console.log(await cell.nth(2).innerText());
  console.log(await cell.nth(3).innerText());
  

for(let i=0; i< await rows.count(); i++){

  console.log(await rows.nth(i).innerText());
}

const row =page.locator("//table//tbody//tr" ,{ hasText :"Cantrell"})

console.log(await row.innerText());

});