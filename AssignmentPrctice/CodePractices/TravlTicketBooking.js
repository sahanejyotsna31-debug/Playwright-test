//Travel Ticket Booking Test Cases//

//Passagner Details//
let PassagerName = "Priya";
let destination = "Goa";
let travelchoice = 3;
let numberOfTickets = 3;
let ticketPrice = 3000;

//Determine travel mode using switch case//

let travelMode;
switch (travelchoice) {
    case 1:
        travelMode = "Bus";  
        break;
    case 2:
        travelMode = "Train";           
        break;
    case 3:
        travelMode = "Flight";     
        break;  
    default:
        travelMode = "Invalid choice";  
        break;
}   

//Calculat total Fare//
let totalFare = ticketPrice * numberOfTickets;

//Apply Discount fare if total fare is greater than 5000//
let discountFare = 0;
if (totalFare > 5000) {
    discountFare = totalFare * 0.1; // 10% discount
    totalFare -= discountFare;
}
let FinalFare = totalFare - discountFare;

//Generate random booking ID (6 digit)//
let bookingID = Math.floor(100000 + Math.random() * 900000);    

//Print booking summary using template literals//
console.log(`Travel Ticket Booking Summary:
Passenger Name: ${PassagerName}         
Destination: ${destination}
Travel Mode: ${travelMode}
Number of Tickets: ${numberOfTickets}
Ticket Price: ${ticketPrice}
Total Fare: ${totalFare}                    
Discount Fare: ${discountFare}
Final Fare: ${FinalFare}
Booking ID: ${bookingID}
`);