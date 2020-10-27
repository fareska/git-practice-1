
////// exercise 1
/*
const calcAge = function (x, y){
    
    return (x-y)
}
const age = calcAge(2017, 1989)
console.log(age)
*/
////// exercise 2
const calcAge = function (x, y){
    let yearsOld= x-y
    let yearsOld2= yearsOld-1
    return ("you are either " + (yearsOld) + " or "+ (yearsOld2))
}
const age = calcAge(2017, 1989)
console.log(age)

////// exercise 3
const isEven= function(a){
    let b 
    if ( a%2 == 0) {
        b = "true"
    } else b = "false"
    return (b)
}

const number = 10
const x = isEven(number)
console.log(x)

////// exercise 4
const isOdd = function(numbers9){
    const oddArr = []
    for (let num of numbers9){
        if ( num%2 !== 0) {
            oddArr.push(num)
        }
    }  
    return (oddArr)
}
const arr = [1,2,3,4,5,6,7,8,9]
const oddArr = isOdd(arr)
console.log(oddArr)

/////////// exercise 5

let doSomething = function(integers, number1) {
    let check 
    for (let int of integers){
        if (int == number1) {
            check = "true"
        }
        else check="false"
    }
    return (check)
}

const arr2 = [1,2,3,4,5,6,7,8,9]
const anyNumber = 21
let check = doSomething(arr2, anyNumber)
console.log(check)

/////////// exercise 6

const calculator = {
    add:   function(num1, num2){let a = num1+num2 ;return a} ,
    subtract: function(num1, num2){let s = num1-num2; return s}    
}
const result1 = calculator.add(20, 1)
const result2 = calculator.subtract(30, 9)
console.log(calculator.add(result1, result2)) //should print 42

/////////// exercise 7

function increaseByNameLength(money, name){return (((name.length-1)*100)+money)}
function makeRegal (name) {name = ("His Royal Highness, "+name); return name }
const turnToKing = function(name, money){
    name = name.toUpperCase()
    money = increaseByNameLength(money, name) 
    name = makeRegal(name) 

    console.log( name + " has " + money + " gold coins")
}

turnToKing("martin luther", 100) 

////////// Extension - Splice Challenge


const splice = function(){
    // write your code here  
}





////// Material  ///// 
/*
const person = {
    name: "Julius",
    speak: function(food) {
      console.log("I like " + food)
    }
  }
  

  console.log(person.name) //you know what this will do

  person.speak("cheese toast") //and this? Try it out!


//////////////
const getInterest = function(money){
    return money * 0.2
  }
  
  const getDebt = function(money){
    const interest = getInterest(money)
    return money + interest
  }
  
  const borrowedMoney = 100
  const debt = getDebt(borrowedMoney)
  console.log(debt) // 



/////////////
const example = function(){
    while(true){
      return
    }
  }

  const add = function(x, y){
    const sum = x + y
    return sum
    console.log("Returned " + sum)
  }
  
  add(1, 2)



/////////////
const findLargest = function(numbers){
    let largest = numbers[0]
    for (let num of numbers){
        if (num > largest){
            largest=num
        }
        
    }
    return (largest)
  }
  
  const ages = [1, 21, 33, 3]
  const largest = findLargest(ages)
  console.log(largest) 
  
  /////////////
const add = function(x, y){
    x + y
  }
  
  const sum = add(1, 2)
  console.log(sum) // prints undefined

///////////
  const multiply = function(x, y = 2){
    console.log(x * y)
  }
  
  multiply(3, 4) // prints 12
  multiply(3) // prints 6
//////////

const creatUser = function (name, age){
    const user = {name : name, age:age}
    console.log(user)
}

creatUser("William", 27)

//////////////

const greet = function (name, timeOfDate){
    console.log("good "+ timeOfDate+ ", "+name)
}

greet ("Darell", "Evening")
//////////

const greet = function (name){
    console.log("Hello " + name)
}

const names = ["Mr. Woods", "Sir Newton", "Lady Gamora", "Her Highness Kayla", "Master Shen", "Squire Carl", "The Eternal Brittany"]
for (let i in names){
    greet(names[i])
}
console.log(names.length)


greet("Dexter")
///////

const tellAJoke = function(){
    console.log("funny you haha")
}

tellAJoke()
////////

const count = function (list){
    console.log(list)
}

let list = [1, 2, 3, 4] 
count(list)
///////////
*/