/*Task 1:
- Declare a variable with const. Its data type should be string. Write your name and print it on the terminal.*/
var myName = "Aisha";
console.log(myName);
/*Task 2:
- Declare a variable with let. Its data type should be number. Write any number.
  Now, change your number and print it on the terminal.*/
var number1 = 7;
number1 = 9;
console.log(number1);
/*Task 3:
- Declare a variable. It should be changable. Write any number.
  Its data type should be number (implicitly).*/
var number2 = 50;
/* Task 4:
- Declare a variable. It should be not be changable. Write any name.
  Its data type should be string (explicitly).*/
var friendName = "Afshan";
function nam(name, country) {
    if (name === void 0) { name = 'ali'; }
    return name + country;
}
console.log(nam('pal'));
