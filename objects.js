////// scroll down to line 131///////

/*
let person = {
    name: "Mariah",
    occupation: "Gangster"
}

const bag = {
    weight: 10,
    owner: "Larissa",
    items: ["Pen", "Bottle", "Book"]
  }

let car = {
    color: "red",
    numWheels : 4,
    isFancy: false
}


if(car.isFancy)
    console.log("The " + car.color + " car has " +car.numWheels+ " wheels it is Fancy" )
else
    console.log("The " + car.color + " car has " +car.numWheels+ " wheels it is not Fancy" )

    //// spot check 2
 
 
let check2 = {
    item1 : "water",
    toBeginning : true,
    items : ["sun", "mon", "tus", "wen", "thr"]
}
const empty = []
//console.log(exercise.item1)
if (check2.toBeginning) 
{ 
    empty.push(check2.item1);
    empty.push(...check2.items);
    //empty.splice(0,1,check2.item)
    check2.items=empty;
}
else 
{
     check2.items.push(check2.item1) 
    }
console.log(check2.items);

//// Dot notation vs Bracket notation.
const animalCounts = {
    lion: 2,
    zebra: 11,
    ostrich: 1,
    tortoise: 4
}

animalCounts["eagle"]= 24

console.log(animalCounts["eagle"])

//// spot check

const human = {
    age: 0
}

const babyNameKey = "name"
const babyNameValue = "Goojibear"
 
human[babyNameKey]=babyNameValue

console.log(human["name"])

/// Replacing values

human["name"] = "must"
console.log(human.name)

// objects vs variables


let apple = {
    color: "red",
    name: "apple"
  }
  
  let cheese = {
    color: "yellow",
    name: "cheese"
  }
  
  let foods = [apple, cheese]
  
  console.log(foods[0].name) // apple
  console.log(foods[1].color) // yellow

  console.log(foods[0])
  console.log(apple.name)
console.log(foods[0].color)

const bag1 = {
    weight: 10,
    owner: "Larissa",
    items: [                   // an array with objects in it!
      {item: "Pen", count: 2},
      {item: "Bottle", count: 1},
      {item: "Book", count: 3}
    ]
  }

  console.log(bag1.items[2].count)
  console.log(bag1.items[0].item)

  let numbers = [1, 2, 3]
let nums = numbers

nums[0] = 50

let person = {
    firstName: "Dopple",
    lastName: "Ganger"
  }
  
  let p = person
  p.firstName= "Chappy"
  
  console.log(p)
  console.log(person)
*/
  //// objects-exercise 1

  const p1={ name: "Jill" ,age: 25 ,city: "NewYork"}  
  const p2={name: "Robert",age: 25 ,city: "New"}

  if (p1.age == p2.age)
  {
      if (p1.city==p2.city)
        console.log(p1.name + " wanted to date " + p2.name)
      else
         console.log(p1.name + " wanted to date " + p2.name + " but couldn't")
  }
  

/////// exercise 2

const object11 = {
    name : "one" ,
    money : 3
}
const object12 = {
    name: "tow",
    money : 2
}

const myList=[object11, object12]
myList[0].money= 4
myList.splice(1,1)
console.log(...myList)

//console.log(object11.money)
/////// exercise 3

const object13 = {
    name : "three" ,
    money : 25
}
const object14 = {
    name: "four",
    money : 34
}
const myList2=[object13, object14]
myList.push(...myList2)
console.log(...myList)

///// exercise 4
const library={
    books: [ 
        {title:"f-book" ,author:"f-author"} ,
        {title: "s-book", author:"s-author"}
    ]
}
myList.push(...library["books"])
console.log(...myList)

/////// exercise 5
const reservations ={
    Bob: {claimed:true},
    Ted: {claimed:true},
}

const name = prompt("Please enter the name for your reservation");

if (name == "Bob" ||  name == "Ted") 
{
    if (name == "Bob") {
         if(reservations.Bob.claimed) 
             alert("your reservation is taken, will check that")
         else 
            console.log("you are welcome Bob")
     }     
     else {
         if(reservations.Ted.claimed) 
         {
             alert("your reservation is taken, will check that")
          }           
             else console.log("you are welcome Ted")
    }

}
//else { console.log("there no reservation with your name sir")}

//////// exercise 5.1    
else 
{
    table1 = {claimed:true}
     reservations[name] = table1;
}
console.log(reservations)

/////// exercise 5.2

////// extensions

const date = 3

const kitchen = {
    owner: "Geraldine",
    hasOven: false, // choose one
    fridge: {
        price: 500,
        works: false, // choose one
        items: [
            { name: "cheese", expiryDate: 7 },
            { name: "raddish", expiryDate: 2 },
            { name: "bread", expiryDate: 1 }
        ]
    }
}

const isOven = kitchen.hasOven
const isWork = kitchen.fridge.works
const daysExpired= date - kitchen.fridge.items[1].expiryDate
const fixingPrice= kitchen.fridge.price
if (isOven)
{ 
    if (isWork)
        console.log(kitchen.owner + "'s raddish expired "+ daysExpired+" ago,  Luckily, she has an oven to cook the raddish in.")
    else 
        console.log(kitchen.owner + "'s raddish expired " + daysExpired+" day ago. Probably because her fridge doesn't work. Luckily, she has an oven to cook the raddish in. And she'll have to pay"+fixingPrice+ " to fix the fridge") 
}
else 
{
    if (isWork)
        console.log(kitchen.owner + "'s raddish expired "+ daysExpired+" day ago. Weird, considering her fridge works. Too bad she doesn't have an oven to cook the raddish in.")
    else 
        console.log(kitchen.owner + "'s raddish expired " + daysExpired+" day ago. Probably because her fridge doesn't work. Too bad she doesn't have an oven to cook the raddish in. And she'll have to pay"+fixingPrice+ " to fix the fridge")    

}

//arr = [1,2 ,3]
//arr[0]
//{human: {name: 'Daena', age: 31} }.age

// let object = { color:"blue" }
 //object.color
 //object["color"]