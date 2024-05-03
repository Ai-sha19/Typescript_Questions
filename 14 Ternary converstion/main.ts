/* Task 1:
let temperature = 25;

 if (temperature > 30) {
     console.log("It's too hot outside!");
 } else {
     console.log("It's not too hot outside.");
 } */


// Converting this code into ternary statement
let temperature = 25; 

let weather = temperature > 30 ? "It's too hot outside!" : "It's not too hot outside.";
console.log(weather);


/* Task 2:
let number = 7;

if (number > 30) {
    console.log("It's too high");
} else if (number > 20) {
    console.log("It's correct");
    }else {
    console.log("number is small");
} */

// Converting this code into ternary statement
let number = 7;
let answer = number > 30 ? "It's too high" : (number > 20 ? "It's correct" : "number is small");
console.log(answer);

