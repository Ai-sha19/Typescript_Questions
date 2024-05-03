// Task 1:
var x = 5;
console.log(++x);
// Answer: 6
// Task 2:
var y = 10;
console.log(-y);
// Answer: -10
// Task 3:
var a = true;
console.log(!a);
// Answer: false
// Task 4:
var b = 7;
var result = b++;
console.log(result);
// Answer:  7
// Task 5:
var c = -3;
console.log(typeof +c);
// Answer: number
// Task 6:
var e = 15;
var res = --e;
console.log(res);
// Answer: 14 
// Task 7:
var f = false;
console.log(!f);
// Answer: true
// Task 8:
var g = 4;
var output = -g;
console.log(output);
// Answer: -4
// Task 9:
var h = "5";
console.log(typeof +h);
// Answer: number
// Task 10:
var a1 = 5;
var b1 = -3;
var result1 = -(-a1 + ++b1) * -b1;
console.log(result1);
// Answer: 14
// Task 11:
var x1 = 10;
var y1 = -x--;
//       -10
var z = +y;
//    +(-10)
var output1 = !(z >= -10);
//            !(-10 >= -10)
//             !(true)
console.log(output1);
// Answer: false
// Task 12:
var a2 = 5;
var b2 = 4;
var c1 = ++a2 + a2++ + --b2 + b2-- + a2 + b2++ + b2++ + a2--;
//        6      6       3     3      7    2      3      7
console.log(c1);
// Answer: 37
