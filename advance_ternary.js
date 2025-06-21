let price = 1200;
let isLeader = true;
// 50% discount for 1200 taka shopping as a leader 
price =
  isLeader === true
    ? price > 1000
      ? (price = (price * 50) / 100)
      : (price = price - 100)
    : (price = price + 100);

console.log(`Your total price is $${price}`);
