import { test, expect, request} from '@playwright/test';
import {faker} from '@faker-js/faker';
import { DateTime } from 'luxon';
test("Create Post API Request Using Dyanmic request body in Playwright", async ({request}) =>{

    const firstname = faker.person.firstName();
    const lastname = faker.person.lastName();
    const totalprice = faker.number.int({min:1000,max:10000});
    const depositpaid = faker.datatype.boolean();
   
    const checkin = DateTime.now().toFormat("yyyy-MM-dd");
    const checkout = DateTime.now().plus({days: 2}).toFormat("yyyy-MM-dd");
    const additionalneeds = faker.lorem.sentence();  
    
    console.log("firstname: "+firstname);
    console.log("lastname: "+lastname);
    console.log("totalprice: "+totalprice);     
    console.log("depositpaid: "+depositpaid);
    console.log("checkin: "+checkin);
    console.log("checkout: "+checkout);
    console.log("additionalneeds: "+additionalneeds);   

    const postAPIResponse = await request.post("/booking",{

        data:{
            "firstname": firstname,
            "lastname": lastname,
            "totalprice": totalprice,
            "depositpaid": depositpaid ,
            "bookingdates": {
               "checkin": checkin,
               "checkout": checkout
            },
            "additionalneeds": additionalneeds
        }
    });
     //Response 
    console.log(await postAPIResponse.json());

    expect(postAPIResponse.ok()).toBeTruthy();
    expect(postAPIResponse.status()).toBe(200);

    const postAPIResponseBody = await postAPIResponse.json();
    expect(postAPIResponseBody.booking).toHaveProperty("firstname",firstname);
    expect(postAPIResponseBody.booking).toHaveProperty("lastname",lastname);
    expect(postAPIResponseBody.booking).toHaveProperty("totalprice",totalprice);
    expect(postAPIResponseBody.booking).toHaveProperty("depositpaid",depositpaid);

    //validate nested json object
    expect(postAPIResponseBody.booking.bookingdates).toHaveProperty("checkin",checkin);
    expect(postAPIResponseBody.booking.bookingdates).toHaveProperty("checkout",checkout);
    expect(postAPIResponseBody.booking).toHaveProperty("additionalneeds",additionalneeds);        



})
