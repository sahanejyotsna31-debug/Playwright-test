function EvenNumber(num){
    let evenNumber = num%2==0;
    for(let i=0; i<=num; i++){
        if(i%2==0){
            console.log(i);
        }   
    }
    return evenNumber;
}   
 const inputNumber = [12, 7, 9, 20, 33, 44, 51];
 const result = EvenNumber(inputNumber);
 console.log("Even Numbers from 0 to", inputNumber, ":", result);