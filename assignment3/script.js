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
//function which adds 5 money for each bLevel every 1 seconds. Values taken in ms. 1000ms = 1s
// math should follow standard order of operations
setInterval(function () {
  money = money + bLevel * 5;
  document.getElementById("currentMoney").innerHTML = "$" + money;
}, 1000);

// function which adds 50 money for each cLevel every 5 seconds.
setInterval(function() {
   money = money + cLevel * 50;
   document.getElementById("currentMoney").innerHTML = "$" + money;
 }, 5000);



// upgrade functions all needs to reduce money by their current cost first, then update the cost for following upgrade levels
// upgradeA: how much money clicking gives you
// do not put "" around variables or they will become string values, not integers!
function upgradeA() {
  // added another if condition for the money to not equal zero to prevent the issue of being able to buy upgrades with no money.
  // still does not prevent the upgrade from occuring.
  if (money >= aCost && money != 0) 
// currently an issue with if condition: if money is at 0 all upgrades can be bought without it deducting anything. Was working fine before, not sure whats happened here as I havent changed the code which should do this.
// if condition seems to just be not working at all... was working in older versions, not much of the javascript has been changed.
  money = money - aCost;
  aLevel = aLevel + 1;
  // need to update current money indicator every time value changes
  document.getElementById("currentMoney").innerHTML = "$" + money;
// cost increase might have to be in a seperate function. Having it in the same one as the upgrade makes the money count go negative.
// cost increase functions multiply the current cost by a percentage, so that the next time you level up an upgrade it costs more. 
// cost increase has been chosen to increase multiplicatively so that the amount of points earned doesnt outpace the amount you can spend too quickly. This is aimed to help keep the game engaging for longer.
  document.getElementById("currentUpgradeALevel").innerHTML = "Level " + aLevel
CostIncreaseA()
  console.log(money);
}
function CostIncreaseA() {
  aCost = aCost * 1.5;
  // make number round to whole number to keep number of decimal points down
  // math.round not seeming to work - maybe the variables arent being detected as integers?
  // returns "NaN"
  //parsefloat may work - not sure how to write this properly
 // aCost=Math.round(parseFloat("aCost"));
  document.getElementById("upgradeACost").innerHTML = "$" + aCost;
 
}



//upgradeB: regular delivery of x amount of money every 5 seconds
function upgradeB() {
  if (money >= bCost ) 
  money = money - bCost;
  bLevel = bLevel + 1;
  document.getElementById("currentMoney").innerHTML = "$" + money;
  document.getElementById("currentUpgradeBLevel").innerHTML = "level " + bLevel
  CostIncreaseB()
  console.log(money);
}
function CostIncreaseB(){
  bCost = bCost * 1.5;
  document.getElementById("upgradeBCost").innerHTML = "$" + bCost;
}


//upgradeC: regular delivery of y amount of money every 15 seconds
function upgradeC() {
  if (money >= cCost) 
    money = money - cCost;
    cLevel = cLevel + 1;
    document.getElementById("currentMoney").innerHTML = "$" + money;
    document.getElementById("currentUpgradeCLevel").innerHTML = "level " + cLevel
    CostIncreaseC()
    console.log(money);
}
function CostIncreaseC(){
  cCost = cCost * 1.5;
  document.getElementById("upgradeCCost").innerHTML = "$" + cCost;
}
