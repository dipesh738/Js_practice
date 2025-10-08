/* WAP in Js to find the factorial of a given number
using for loop and reduce*/

// Using for loop

// let a = prompt("enter a number");

// if (a < 0) {
//   console.log("there is no factorial for negative number");
//   alert("there is no factorial for negative number");
// } else {
//   let fact = 1;

//   for (let i = 1; i <= a; i++) {
//     fact *= i;
//   }
//   console.log(`the factorial of ${a} is ${fact}`);
//   alert(`the factorial of ${a} is ${fact}`);
// }

//using reduce

let arr = [1, 2, 3, 4, 5, 6];

let fct = (a, b) => {
  return a * b;
};

console.log(`the factorial of 6 is ${arr.reduce(fct)}`);
//
