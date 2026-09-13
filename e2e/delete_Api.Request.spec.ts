import { test, expect,request } from "@playwright/test";
import { faker } from "@faker-js/faker";



test("Delete booking ID using playwright @smoke", async ({ request }) => {

    const postAPIResponse = await request.post("/booking", {
        data: {
            "firstname": "Playwright",
            "lastname": "Automation",
            "totalprice": 3000,
            "depositpaid": true,
            "bookingdates": {
                "checkin": "2026-08-25",
                "checkout": "2026-08-28"
            },
            "additionalneeds": "Dinner Required"
        }
    });

    // response
    console.log(await postAPIResponse.json());

    expect(postAPIResponse.ok()).toBeTruthy();
    expect(postAPIResponse.status()).toBe(200);

    const postAPIResponseBody = await postAPIResponse.json();
});
