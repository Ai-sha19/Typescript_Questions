// Converting this code into switch statement
/*let num = 75;

if (num > 90) {
    console.log("Grade: A");
} else if (num > 80) {
    console.log("Grade: B");
} else if (num > 70) {
    console.log("Grade: C");
} else if (num > 60) {
    console.log("Grade: D");
} else if (num > 50) {
    console.log("Grade: E");
} else {
    console.log("Grade: F");
}*/
var num = 75;
switch (true) {
    case num > 90:
        console.log("Grade: A");
        break;
    case num > 80:
        console.log("Grade: B");
        break;
    case num > 70:
        console.log("Grade: C");
        break;
    case num > 60:
        console.log("Grade: D");
        break;
    case num > 50:
        console.log("Grade: E");
        break;
    default:
        console.log("Grade: F");
        break;
}
