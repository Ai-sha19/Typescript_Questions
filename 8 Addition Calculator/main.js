// Making addition calculator with the help of inquirer and 2 numbers.
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
        name: 'firstNumber',
        type: 'number',
        message: "please enter your first value:"
    },
    {
        name: 'secondNumber',
        type: 'number',
        message: "please enter your second value:"
    }
]);
let sum = answer.firstNumber + answer.secondNumber;
console.log(`The sum of ${answer.firstNumber} and ${answer.secondNumber} is: ${sum}`);
