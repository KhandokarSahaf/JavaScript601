let amount = 5000;
let discount = 10;

if (amount >= 5000) {
  discount = (amount * 10) / 100;
  amount = amount - discount;
  console.log(amount);
}
