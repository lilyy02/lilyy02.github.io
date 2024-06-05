// these variables are all declared using "var" since they will constantly be reassigned
// need global scope as different functions will update and refer back to the current values for these variables.
var aLevel = 1;
var bLevel = 0;
var cLevel = 0;
var money = 0;
var aCost = 25;
var bCost = 100;
var cCost = 250;

// function which adds money every click
function click() {
  var money = money + aLevel;
  // display the value of the "money" variable as a header using innerhtml
  document.getElementById("currentMoney").innerHTML = "$" + money;
  //logs in console the current value of the money variable to see if function is working
  console.log(money);
};

// upgrade functions all needs to reduce money by their current cost first, then update the cost for following upgrade levels
// upgradeA: how much money clicking gives you
// do not put "" around variables or they will become string values, not integers!
function upgradeA() {
  var aLevel = aLevel + 1;
  var money = money - aCost;
  var aCost = aCost * 1.5;
}
//upgradeB: regular delivery of x amount of money every 5 seconds
function upgradeB() {
  var bLevel = bLevel + 1;
  var money = money - bCost;
  var bCost = bCost * 1.5;
}
//upgradeC: regular delivery of y amount of money every 15 seconds
function upgradeC() {
  var cLevel = cLevel + 1;
  var money = money - cCost;
  var cCost = cCost * 1.5;
}
