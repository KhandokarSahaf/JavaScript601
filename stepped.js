let amount = 2500;

if (amount >= 5000) {
  discount = (amount * 10) / 100;
  amount = amount - discount;
  console.log(`after apply 10% discount payable amount is ${amount} taka`);
} else if (amount >= 3000) {
  discount = (amount * 5) / 100;
  amount = amount - discount;
  console.log(`after putting 5% discount you have to pay me ${amount} taka`);
} else if (amount >= 2000) {
  discount = (amount * 4) / 100;
  amount = amount - discount;
  console.log(`after adding 2% discount total amount is ${amount} taka`);
} else{
    console.log(`Your total amount is ${amount} Taka only`);
}
