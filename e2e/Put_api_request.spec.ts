

import { test, expect } from '@playwright/test';
import tokenBody from './test-data/token-requestBody.json';
import putRequestBody from './test-data/Put-requestBody.json';

test('Put API Request to update a booking ID using Playwright', async ({ request }) => {
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

  const putApiResponse = await request.put(`/booking/${bookingID}`, {
    headers: {
      'Content-Type': 'application/json',
      Cookie: `token=${tokenNumber}`,
    },
    data: putRequestBody,
  });

  expect(putApiResponse.ok()).toBeTruthy();
  expect(putApiResponse.status()).toBe(200);

  const putAPIResponseBody = await putApiResponse.json();
  expect(putAPIResponseBody.firstname).toBe('Specflow');
  expect(putAPIResponseBody.lastname).toBe('Selenium C#');
});