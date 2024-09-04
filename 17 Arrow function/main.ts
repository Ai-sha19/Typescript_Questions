/* Basic Arrow Functions Question:

Define a Arrow function called `greeting` that takes a parameter `name` and returns a greeting message including the provided `name`. Then, call the `greet` Arrow function with the argument "John" and log the result to the console.*/

let greeting = (name: string) => {
    return `Hey ${name}! Have a great day!`

}
console.log(greeting("John"));


/* Arrow Function Return Value Question:

Write a JavaScript Arrow function named `calculateArea` that takes two parameters: `length` and `width`, representing the length and width of a rectangle respectively. The Arrow function should calculate the area of the rectangle and return the result. 

Provide an example of calling this Arrow function with values `5` for length and `3` for width, and then print the result.*/

let calculateArea = (length: number, width: number) => {
    return length * width
}
console.log(calculateArea(5, 3));


/* Default Parameter Arrow Function Question:

Create a JavaScript Arrow function named `greet` that accepts two parameters: `name` and `greeting`. The Arrow function should return a greeting message using the provided `name` and `greeting`. If no `greeting` is provided, it should default to `"Hello"`. 

For example:
- When `greet("John", "Good morning")` is called, it should return `"Good morning, John!"`.
- When `greet("Jane")` is called, it should return `"Hello, Jane!"`.*/

let greet = (name: string, greeting:string = 'Hello') => {
    return `${greeting}, ${name}!`
}
console.log(greet("John", "Good morning"));
console.log(greet("Jane"));


/* Rest Parameter in Arrow Function Question:

Explain the concept of a rest parameter in typescript. write a typeScript Arrow function named `friends` that accepts any name of parameters and returns all name in array.

For example:
- If `name('taha', 'Ahmed', 'Ali'), it should return ['taha', 'Ahmed', 'Ali'].

Rest Parameter in TypeScript:
The rest parameter syntax (...) in TypeScript allows a function to accept an indefinite number of arguments as an array. It enables a function to take an arbitrary number of arguments, rather than a fixed number.*/

let friends = (...name:string[]) => {
    return name;
}
console.log(friends('Taha', 'Ahmed', 'Ali'));


/* Spread Operator in Arrow Function:

Explain the concept of a spread operator in typescript. write a typeScript Arrow function named `friend` that accepts any name of parameters and returns all name in array.then make a copy of that name and pop last name form array. make sure your orignal array should not be change.

For example:
- If `name('taha', 'Ahmed', 'Ali'), it should return ['taha', 'Ahmed', 'Ali'].

Spread Operator in TypeScript:
The spread operator (...) in TypeScript is used to expand an iterable object into individual elements. It is used in array literals, function calls, and object literals.*/

let friend = (...name:string[]) => {
    return name;
}
const orignalArray = friend('Taha', 'Ahmed', 'Ali');

const copyofArray = [...orignalArray];
copyofArray.pop();

console.log(copyofArray);
console.log(orignalArray);

let studentData = {
    name : 'ali',
    isEnrolled : true,
    id : 1001,
    address : {city : 'karachi', country : 'Pakistan'}
}


for(let key in studentData){
    console.log(`${key} ${studentData[key]}`);
}






