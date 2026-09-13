import { test, expect } from '@playwright/test';
import tokenBody from './test-data/token-requestBody.json';
import patchRequestBody from './test-data/patch-requestBody.json';

test('Patch API Request to update a booking ID using Playwright', async ({ request }) => {
  const postAPIResponse = await request.post('/booking', {
    data: {
      firstname: 'Ishan',
      lastname: 'Sahane',
      totalprice: 5000,
      depositpaid: true,
      bookingdates: {
        checkin: '2026-09-02',
        checkout: '2026-09-04',
      },
      additionalneeds: 'super bowls',
    },
  });

  expect(postAPIResponse.ok()).toBeTruthy();
  expect(postAPIResponse.status()).toBe(200);

  const postAPIResponseBody = await postAPIResponse.json();
  const bookingID = postAPIResponseBody.bookingid;

  const tokenAPIResponse = await request.post('/auth', {
    data: tokenBody,
  });

  expect(tokenAPIResponse.ok()).toBeTruthy();

  const tokenResponseBody = await tokenAPIResponse.json();
  const tokenNumber = tokenResponseBody.token;

  const patchApiResponse = await request.patch(`/booking/${bookingID}`, {
    headers: {
      'Content-Type': 'application/json',
      Cookie: `token=${tokenNumber}`,
    },
    data: patchRequestBody,
  });

  expect(patchApiResponse.ok()).toBeTruthy();
  expect(patchApiResponse.status()).toBe(200);

  const patchAPIResponseBody = await patchApiResponse.json();
  console.log('Patch API Response:', patchAPIResponseBody);

  // Use only fields present in your patch payload / API response
  expect(patchAPIResponseBody.firstname).toBe('Testers Talk');

  // If your patch body includes lastname too, use:
  // expect(patchAPIResponseBody.lastname).toBe('Selenium C#');
});