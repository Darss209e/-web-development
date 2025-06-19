var a= prompt("Enter  yur firest anumber: ");

let x= + ,-, *, / ;

var b= prompt("Enter your second number: ");    

if (x==+) {
    sum = Math.random(a+b);
    console.log("The sum is: " + sum);
}
if (x==-) {
    sub = Math.random(a-b);
    console.log("The sum is: " sub);
}
if (x==*) {
    mult= Math.random(a*b);
    console.log("The sum is: " mult);
}
if (x==/) {
    div = Math.random(a/b);
    console.log("The sum is: " div);
}


// function faultyAdd(num1, num2) {
//   let faultChance = 0.1; // 10% chance of fault
//   let randomNumber = Math.random();

//   if (randomNumber < faultChance) {
//     // Faulty behavior: perform subtraction instead of addition
//     console.log("Faulty calculation occurred!");
//     return num1 - num2;
//   } else {
//     // Correct behavior
//     return num1 + num2;
//   }
// }

// let result = faultyAdd(9, 3);
// console.log("Result:", result);