
let companies = ["Tesla", "Amazon", "Google", "Microsoft"]

companies[1] = "Twitter";

companies = ["Samsung", "Kellogg", "Coca-Cola", "J.P Morgan"]
companies.unshift("Blizzard Entertainment")
companies.push("Fox Entertainment", "Marvel Studios", "Rolex");

///console.log(companies);

let employees = ["DeMarcus", "Kai", "Christina"] ;
let candidates= ["Tiffany", "Elana", "Carl"];

employees.push(...candidates);

employees.splice(3,1)
//console.log(employees);


const myStuff = ["a", "b", "c"];
myStuff.unshift("c");
myStuff.push("a");
myStuff.push("f", "g", "w")

myStuff.push(...myStuff)
//console.log(myStuff);

let fridge= ["Milk", "Eggplant", "Truffle", "Edible shoe"];
let removedItem= fridge.splice(0,3);
//console.log(removedItem);
//console.log(fridge);

let tray = ["clouds", "sky", "birds", "worms", "earth", "dirt", "clothes", "human", "life"];

tray.splice(4-1, 2, "space", "ground" );

//console.log(tray);
//console.log("the first plant is",plants[0]"and the last one is",plants[plant.length-1])


//const times = [ "1", "2", true, 3, null]
const tempArray =[""];
const genes = ["ACADM", "GLMN", "RLF", "AZIN2", "CRYZ", ""];

//genes.push(genes[0], genes[1], "ASD");
////////// task 2
let temp= genes[2]
genes.splice(2,1, genes[genes.length-1]);
genes.splice(genes.length-1 ,1, temp); 
////////// task 3
let temp2= genes[genes.length-2]
genes.splice(genes.length-2,1);
genes.push(temp2, temp2);
//genes.push(...times);
///////// task4
tempArray.push(...genes);
tempArray.splice(0,1,"FXT");
console.log(tempArray);

