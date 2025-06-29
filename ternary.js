// TERNARY 01
const totalPrice = 300;

// if (totalPrice > 200) {
//   console.log(`discount 10 taka`);
// } else {
//   console.log(`no discount`);
// }

// This is short version of if else condition using ternary
totalPrice > 200 ? console.log(`discount 10 taka`) : console.log(`no discount`);

// advance ternary 02 
let price = 500;
let leader = true;

// if (price > 500) {
//   price = 0;
// } else {
//   price = price + 100;
// }
// console.log(` total price is ${price}`);

// This is short version of if else condition using ternary
price = leader === true ? 0 : (price = price + 100);
console.log(price);
