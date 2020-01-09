let calculateChange = function(total, cash) {
  let cashReturn = cash - total;
  let change = {};

  //Checks for twenties
  if (Math.floor(cashReturn / 2000) !== 0) {
    change.twentyDollar = Math.floor(cashReturn / 2000);
    cashReturn = cashReturn - (2000 * change.twentyDollar);
  } else if (cashReturn % 2000 === 0) {
    change.twentyDollar = Math.floor(cashReturn / 2000);
  }
  //Checks for tens
  if (Math.floor(cashReturn / 1000) !== 0) {
    change.tenDollar = Math.floor(cashReturn / 1000);
    cashReturn = cashReturn - (1000 * change.tenDollar);
  } else if (cashReturn % 1000 === 0) {
    change.tenDollar = Math.floor(cashReturn / 1000);
  }
  //Checks for fives
  if (Math.floor(cashReturn / 500) !== 0) {
    change.fiveDollar = Math.floor(cashReturn / 500);
    cashReturn = cashReturn - (500 * change.fiveDollar);
  } else if (cashReturn % 500 === 0) {
    change.fiveDollar = Math.floor(cashReturn / 500);
  }
  //Checks for toonies
  if (Math.floor(cashReturn / 200) !== 0) {
    change.twoDollar = Math.floor(cashReturn / 200);
    cashReturn = cashReturn - (200 * change.twoDollar);
  } else if (cashReturn % 200 === 0) {
    change.twoDollar = Math.floor(cashReturn / 200);
  }
  //Checks for loonies
  if (Math.floor(cashReturn / 100) !== 0) {
    change.oneDollar = Math.floor(cashReturn / 100);
    cashReturn = cashReturn - (100 * change.oneDollar);
  } else if (cashReturn % 100 === 0) {
    change.oneDollar = Math.floor(cashReturn / 100);
  }
  //Checks for quarters
  if (Math.floor(cashReturn / 25) !== 0) {
    change.quarter = Math.floor(cashReturn / 25);
    cashReturn = cashReturn - (25 * change.quarter);
  } else if (cashReturn % 25 === 0) {
    change.quarter = Math.floor(cashReturn / 25);
  }
  //Checks for dimes
  if (Math.floor(cashReturn / 10) !== 0) {
    change.dime = Math.floor(cashReturn / 10);
    cashReturn = cashReturn - (10 * change.dime);
  } else if (cashReturn % 10 === 0) {
    change.dime = Math.floor(cashReturn / 10);
  }
  //Checks for nickels
  if (Math.floor(cashReturn / 5) !== 0) {
    change.nickel = Math.floor(cashReturn / 5);
    cashReturn = cashReturn - (5 * change.nickel);
  } else if (cashReturn % 5 === 0) {
    change.nickel = Math.floor(cashReturn / 5);
  }
  //Checks for pennies
  if (Math.floor(cashReturn / 1) !== 0) {
    change.penny = Math.floor(cashReturn / 1);
    cashReturn = cashReturn - (1 * change.penny);
  } else if (cashReturn % 1 === 0) {
    change.penny = Math.floor(cashReturn / 1);
  }

  return change;
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));