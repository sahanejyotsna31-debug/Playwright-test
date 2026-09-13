//Employee Performance Evalution Program//
//Employee Details//
let EmployeeName = "Rahul Sharma";
let EmployeeID = "EMP101";
let Department = "Tech Support";
let PerformanceScore = 88;
//Display name in uppercase and lower case//
console.log("Employee Name in Uppercase: " + EmployeeName.toUpperCase());
console.log("Employee Name in Lowercase: " + EmployeeName.toLowerCase());
//Check whether department contain word "Tech"//
if (Department.includes("Tech")) {
    console.log("The department contains the word 'Tech'.");
} else {
    console.log("The department does not contain the word 'Tech'.");
}
//Assign performance rating based on score//
if (PerformanceScore >= 90 && PerformanceScore <= 100) {
    "Performance Rating: OutStanding";
} else if (PerformanceScore >= 70 && PerformanceScore < 80) {
    "Performance Rating: Excellent";
} else if (PerformanceScore >= 50 && PerformanceScore < 60) {
    "Performance Rating: Good";
}else {
    "Performance Rating: Needs Improvement";
}
//Generate radome 6 digit reference number//
let referenceNumber = Math.floor(100000 + Math.random() * 900000);
console.log("Reference Number: " + referenceNumber);

//Print Evalution Summary using template literals//
console.log(`Employee Performance Evaluation Summary:
Employee Name: ${EmployeeName}      
Employee ID: ${EmployeeID}
Department: ${Department}
Performance Score: ${PerformanceScore}
Reference Number: ${referenceNumber}
`); 