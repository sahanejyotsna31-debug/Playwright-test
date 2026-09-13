import { test, expect, request} from '@playwright/test';

test("Create Post API Request Using static request body in Playwright", async ({request}) =>{

    const postAPIResponse = await request.post("/booking",{

        data:{
            "firstname": "Ishan",
            "lastname": "Sahane",
            "totalprice": 5000,
            "depositpaid": true,
            "bookingdates": {
               "checkin": "2026-09-02",
               "checkout": "2026-09-04"
            },
            "additionalneeds": "super bowls"
        }
    });
     //Response 
    console.log(await postAPIResponse.json());

    expect(postAPIResponse.ok()).toBeTruthy();
    expect(postAPIResponse.status()).toBe(200);

    const postAPIResponseBody = await postAPIResponse.json();
    expect(postAPIResponseBody.booking).toHaveProperty("firstname","Ishan");
    expect(postAPIResponseBody.booking).toHaveProperty("lastname","Sahane");
    expect(postAPIResponseBody.booking).toHaveProperty("totalprice",5000);
    expect(postAPIResponseBody.booking).toHaveProperty("depositpaid",true);

    //validate nested json object
    expect(postAPIResponseBody.booking.bookingdates).toHaveProperty("checkin","2026-09-02");
    expect(postAPIResponseBody.booking.bookingdates).toHaveProperty("checkout","2026-09-04");
    expect(postAPIResponseBody.booking).toHaveProperty("additionalneeds","super bowls");        



})
