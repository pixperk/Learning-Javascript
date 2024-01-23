const myArray = [];
//add alements to an array
myArray[0] = "Yashaswi"
myArray[1]= 1001;
myArray[2]= false;
//refer an array
/* console.log(myArray)
console.log(myArray.length)
console.log(`Last element of myArray is ${myArray[myArray.length-1]}`)
console.log(myArray[1]) */

/* myArray.push("school")//adds at end
console.log(myArray)
const lastItem=myArray.pop()//deletes from end
console.log(lastItem)
myArray.unshift(42)//adds at front
console.log(myArray)
myArray.shift()//deletes at front
const newlength= myArray.unshift(43)//similar with push
console.log(newlength) */

/* delete myArray[1];//leaves undefined data */
myArray.splice(1, 1);//deletes 1 element from 1st position
myArray.splice(1,0,42)
console.log(myArray)
console.log(myArray[1])

const myArray2= ["A", "B", "C", "D", "E", "F"];
const newArray = myArray2.slice(2,5)
console.log(newArray)

myArray2.reverse()
console.log(myArray2)

myArray2.reverse()
const newString = myArray2.join();
console.log(newString)

const newArray2 = newString.split(",")
console.log(newArray2)

const myArrayA = ["A", "B", "C"]
const myArrayB = ["D", "E", "F"]

const newArray3 =  myArrayA.concat(myArrayB)
console.log(newArray3)

const newArray4=[...myArrayA,...myArrayB]
console.log(newArray4)

// Arrays for equipment shelves
const equipShelfA = ["Laptop", "Camera", "Headphones"];
const equipShelfB = ["Drill", "Wrench Set", "Power Saw"];

// Arrays for clothes shelves
const clothesShelfA = ["T-shirts", "Jeans", "Sweaters"];
const clothesShelfB = ["Dresses", "Suits", "Scarves"];

//Nested-Arrays
console.log(equipShelfA[1])
console.log(clothesShelfA[1])

const equipDept = [equipShelfA, equipShelfB]
const clothesDept = [clothesShelfA, clothesShelfB]

console.log(equipDept)
console.log(clothesDept)

console.log(equipDept[0][2]) //Headphones
console.log(clothesDept[1][1]) //Suits

const store= [equipDept, clothesDept]
console.log(store)
console.log(`I will purchase ${store[1][0][0]} and ${store[0][0][2]}`)