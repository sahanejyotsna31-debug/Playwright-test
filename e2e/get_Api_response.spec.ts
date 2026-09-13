//bookingID-respective response body is stored in get-api.requestBody.json file. This file is used in the next test case to validate the response of GET API request.

//filter booking based on the provided parameter on the query

//Query param?get_api_request_spec

import { test, expect, request} from '@playwright/test';


test("Get API Request based on booking ID in Playwright", async ({request}) =>{

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

    const bookingID = postAPIResponseBody.bookingid;
    expect(postAPIResponseBody.booking).toHaveProperty("firstname","Ishan");
    expect(postAPIResponseBody.booking).toHaveProperty("lastname","Sahane");
    expect(postAPIResponseBody.booking).toHaveProperty("totalprice",5000);
    

    //validate nested json object
    expect(postAPIResponseBody.booking.bookingdates).toHaveProperty("checkin","2026-09-02");
    expect(postAPIResponseBody.booking.bookingdates).toHaveProperty("checkout","2026-09-04");
    
    const getAPIResponse = await request.get(`/booking/${bookingID}`);
    console.log("====================================")
    console.log(await getAPIResponse.json());
    expect(getAPIResponse.ok()).toBeTruthy();
    expect(getAPIResponse.status()).toBe(200);

    const queryAPIResponse = await request.get(`/booking`, {
        params: {
            firstname: 'Ishan',
            lastname: 'Sahan'
          
        }
        });

    console.log("====================================")
    console.log(await queryAPIResponse.json());

})
