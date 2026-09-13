    //First parameter for resolve and second parameter for reject
    const foodOrder = new Promise((resolve, reject) => {
2
   let restaurantOpen = false;
4
    if (restaurantOpen) {
    resolve("Food Delivered");
6 } else {
7
      reject("Restaurant Closed");
8
   } 
  });
10
   
   foodOrder.then(result => {
13
   console.log(result);
14
    }).catch(error => {
16
  console.log(error);
17
   });



   const foodOrder = new Promise((resolve, reject) => {
2
   let restaurantOpen = true;
4
    if (restaurantOpen) {
    resolve({name: "Jyotsna", age: 28});
6 } else {
7
      reject("Restaurant Closed");
8
   } 
  });
10
   
   foodOrder.then(result => {
13
   console.log(result);
14
    }).catch(error => {
16
  console.log(error);
17
   });

   // Promise chaining depends previous on promise output
2

3
function prepareFood() {
4
return new Promise((resolved, reject) => {
5
console.log("Preparing Food..");

7
setTimeout(() => {
8
resolved("Food Prepared");
9
}, 2000);
10
});
11
}


