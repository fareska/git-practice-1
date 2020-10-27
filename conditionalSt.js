///////exercise 1

const numChildren = 5
//console.log(numChildren)

const isCareful = false
//console.log(isCareful) 

if (isCareful) {console.log("nice")}
else { console.log( numChildren+1) }

///////exercise 2

let silverwareCount = 5


//console.log(numChildren)

//const isCareful = false
//console.log(isCareful) 

if (silverwareCount%2 == 0) {console.log("The number is even")}
else { console.log("There is something missing") }

///// exercise 3

let performance = "stellar"
let salary = 10000
const goodBonus = 1000
const stellarBonus = 3000

if (performance == "stellar" ) { salary += stellarBonus }
else {salary += goodBonus}
console.log("your salary is " + salary)

/////// exercise 4

const isVIP = true
let cash = 300

if ( isVIP || cash > 300 ) {console.log("you welcome")}
else {console.log("Sorry, you can't come in")}

////// exercise 6
const gender = "women"
let profession = "business"

if (gender == null) { profession += "person"}
else {  if (gender == "man") { profession += "man"} else {profession += "women"} }


console.log(profession)


// another sulotion:
function ex6(){
const gender = "women"
let profession = "business"

if (gender != "null") { if (gender == "man") { profession += "man"} else {profession += "women"}}
else {  profession += "person" }


console.log(profession)
}
ex6();
////// exercise 7
let boughtTesla = true
const yearOfTeslaPurchase = 2010
let isUSCitizen = true
let currentYear = 2018

if (boughtTesla && isUSCitizen)
{if (currentYear-yearOfTeslaPurchase>4){console.log("do you wanna upgrade?")}else{console.log("Are you satisfy? ")}}
else
{if(boughtTesla){console.log("would you like to move to the states?")}else{console.log("Are you interested buying the new Tesla?")}}

 
//if (boughtTesla)
//{
  // if (isUSCitizen) 
   //{ 
    // if ( (currentYear-yearOfTeslaPurchase) >  4 ) 
     //{
      // console.log"We pretty recommened you to upgrade youre model, would you like so ?"
  // }
   //else {console.log"Are you satisfay?"}  } }
 //else {console.log("would you like to move to the Unaited states?)"


