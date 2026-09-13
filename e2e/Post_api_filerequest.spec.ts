import { test, expect, request} from '@playwright/test';
import {faker} from '@faker-js/faker';
import requestBody from "../e2e/test-data/post-api-request-body.json";

test("Create Post API Request Using static request body in Playwright", async ({request}) =>{

    const postAPIResponse = await request.post("/booking",{

        data:requestBody
    });
     //Response 
    console.log(await postAPIResponse.json());

    expect(postAPIResponse.ok()).toBeTruthy();
    expect(postAPIResponse.status()).toBe(200);

    const postAPIResponseBody = await postAPIResponse.json();
    expect(postAPIResponseBody.booking).toHaveProperty("firstname","Jaanaki");
    expect(postAPIResponseBody.booking).toHaveProperty("lastname","Sahane");
    expect(postAPIResponseBody.booking).toHaveProperty("totalprice",5000);
    expect(postAPIResponseBody.booking).toHaveProperty("depositpaid",true);

    //validate nested json object
    expect(postAPIResponseBody.booking.bookingdates).toHaveProperty("checkin","2026-09-03");
    expect(postAPIResponseBody.booking.bookingdates).toHaveProperty("checkout","2026-09-05");
    expect(postAPIResponseBody.booking).toHaveProperty("additionalneeds","super bowls");        



})
