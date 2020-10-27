
/*let companies = ["Tesla", "Amazon", "Google", "Microsoft"]
while(companies.length > 0){
    companies.splice(0, 1)
}

for(let i = 80; i < 100; i+=2){
    console.log(i)
  }

//for(let company of companies){
    //console.log(company)
  //}
  
//for(let company of companies){
//    console.log("one day i will work at " + company)
  //}

/*let timer = 0
while(timer<10){
    console.log(timer);
    timer++;
}*/

////// Exercise 1

let names = ["Jhon", "Robert", "Tom", "Andria"];
let ages = [20, 23, 34, 27];

//console.log(names[0]+" "+ages[0])

//for(let i in names)  ------- option one
  //  console.log(names[i]+ " is "+ages[i]+" years old")

  for (let i=0; names.length > i; i++){   ///// option tow
    console.log(names[i]+ " is "+ages[i]+" years old")
  }

  ////// Exercise 2

  /*////option 1
  let justNumbers = [2, 5, 6, 4, 7]
  let sum = 0;
  for (let i in justNumbers){
    sum += justNumbers[i] ;
  }
  console.log(sum)
*/
  
  let justNumbers = [3, 5, 6, 4, 7] 
  let sum = 0;

/*

  for (let b=0; justNumbers.length>b ; b++){  /// option 2
      sum += justNumbers[b];
  }
  console.log(sum)

 for (let number of justNumbers){  /////// option 3
    // console.log(number)
     sum += number
 } 
 console.log(sum)

 */

  ////// Exercise 3
  for (let number of justNumbers){  /////// option 1
    // console.log(number)
     sum += number
 } 
 console.log(sum/justNumbers.length)
/*
  ////// Exercise 4

  let nums = []   /////// option 1
  for (let i=1; 100>=i; i++)
  {nums.push(i)}
  
  console.log(...nums)

  let nums2 = []   ////////// option 2
  let i = 0 
   while (100 > i  ){
    i++
    nums2.push(i)    
  }
  console.log(...nums2)

    ////// Exercise 5
    let nums3 = []   ////////// option 1
    let n = 0 
     while (100 > n  ){
      n++;
      nums3.push(n);
      if (n%2 !== 0)   console.log (n)    
    }
    console.log(...nums3)   
*/

//////////// Exercise 6

let numsss = [773, 414, 213, 374, 434, 700, 506, 495, 852, 585, 271, 198, 689, 248, 708, 197, 96, 260, 921, 834, 258, 662, 501, 632, 715, 503, 538, 289, 596, 381, 817, 280, 968, 877, 431, 146, 491, 724, 83, 841, 174, 21, 460, 25, 785, 539, 291, 404, 903, 278, 159, 229, 216, 683, 84, 87, 879, 406, 661, 537, 890, 394, 382, 477, 271, 373, 82, 104, 709, 723, 333, 958, 95, 983, 732, 917, 324, 785, 754, 23, 659, 551, 408, 442, 766, 242, 611, 846, 802, 866, 817, 848, 227, 349, 243, 837, 21, 954, 146, 11]

for (let s = 0; numsss.length>s; s++ ){
    if (numsss[s] == 709) {console.log(s)}
}

//////////// Exercise 7
    function ex7(){
    const names1 = ["Ashley", "Donovan", "Lucas"]
    const ages1 = [23, 47, 18]
    const people = []
    //let merge = { name1: "a" , age1: 2 }
    
    let l = 0 
    
    while(l < 3)
    {  //for (let m = 0; ages1.length > m ; m++ )
        let merge = { }
        merge.name = names1[l] ; 
        merge.age= ages1[l] ;
        people.push(merge);
        l += 1  
    }
console.log(people) ; 
}
ex7();
const names1 = ["Ashley", "Donovan", "Lucas"]
const ages1 = [23, 47, 18]
const people = []

let merge = {}
for(let i in names1){
    merge = {name :names1[i] , age: ages1[i]}
    people.push(merge)
}
console.log(people)

//////////// Exercise 8
