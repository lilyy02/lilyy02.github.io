// these variables are all declared using "var" since they will constantly be reassigned
// need global scope as different functions will update and refer back to the current values for these variables.
var money = 0;
var aLevel = 1;
var bLevel = 0;
var cLevel = 0;
var aCost = 25;
var bCost = 100;
var cCost = 250;

// function which adds money every click
function clicked() {
  money = money + aLevel;
  // display the value of the "money" variable as a header using innerhtml
  document.getElementById("currentMoney").innerHTML = "$" + money;
  //logs in console the current value of the money variable to see if function is working
  console.log(money);
}
//function which adds 20 money for each bLevel every 5 seconds. Values taken in ms. 1000ms = 1s
// math should follow standard order of operations
setInterval(function () {
  money = money + bLevel * 20;
  document.getElementById("currentMoney").innerHTML = "$" + money;
}, 5000);

// function which adds 100 money for each cLevel every 15 seconds.
setInterval(function() {
   money = money + cLevel * 100;
   document.getElementById("currentMoney").innerHTML = "$" + money;
 }, 15000);



// upgrade functions all needs to reduce money by their current cost first, then update the cost for following upgrade levels
// upgradeA: how much money clicking gives you
// do not put "" around variables or they will become string values, not integers!
function upgradeA() {
  if (money >= aCost) 
  money = money - aCost;
  aLevel = aLevel + 1;
  // need to update current money indicator every time value changes
  document.getElementById("currentMoney").innerHTML = "$" + money;
// cost increase might have to be in a seperate function. Having it in the same one as the upgrade makes the money count go negative.
  CostIncreaseA()
  console.log(money);
}
function CostIncreaseA() {
  aCost = aCost * 1.5;
  // make number round to whole number to keep number of decimal points down
}



//upgradeB: regular delivery of x amount of money every 5 seconds
function upgradeB() {
  if (money >= bCost) 
  money = money - bCost;
  bLevel = bLevel + 1;
  document.getElementById("currentMoney").innerHTML = "$" + money;
  CostIncreaseB()
  console.log(money);
}
function CostIncreaseB(){
  bCost = bCost * 1.5;
}


//upgradeC: regular delivery of y amount of money every 15 seconds
function upgradeC() {
  if (money >= cCost) 
    money = money - cCost;
    cLevel = cLevel + 1;
    document.getElementById("currentMoney").innerHTML = "$" + money;
    CostIncreaseC()
    console.log(money);
}
function CostIncreaseC(){
  cCost = cCost * 1.5;
}
