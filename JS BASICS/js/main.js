console.log("Hello World!")
//strings
const myVariable="Mathematics"
console.log(typeof myVariable)
console.log(myVariable.length)
console.log(myVariable.charAt(5))
console.log(myVariable.indexOf("matics"))
console.log(myVariable.lastIndexOf("matics"))
console.log(myVariable.slice(0,3))
console.log(myVariable.includes("matics"))
console.log(myVariable.includes("matrices"))
console.log(myVariable.toUpperCase())
console.log(myVariable.split("e"))
console.log(myVariable.split(""))
console.log("Kazuma, Takuma, Kotaro, Taka".split(","))

//numbers
const myNumber = 42;
const myFloat = 42.06676676575;
const myString="42"
console.log(myNumber)
console.log(myFloat)
console.log(myFloat==myNumber);
console.log(myNumber==myString)
console.log(myFloat===myNumber);
console.log(myNumber===myString)
console.log(myNumber+3)
console.log(myString+3)
console.log(Number(myString)+3)
console.log(Number.isInteger(myString))
const string2= "33.56485748adfgd"
console.log(Number.parseFloat(string2))
console.log(Number.parseInt(myFloat))
console.log(myFloat.toFixed(2))
console.log(Number.parseFloat(string2).toFixed(5))
console.log(typeof(myFloat.toString())) //string
console.log(typeof(myFloat.toFixed(2))) //string
console.log(Number.isNaN("ME"))
console.log(isNaN("ME"))

//MathObjects
console.log(Math.PI);
console.log(Math.trunc(Math.PI))
console.log(Math.round(Math.PI))
console.log(Math.round(3.78))
console.log(Math.ceil(Math.PI))
console.log(Math.floor(Math.PI))
console.log(Math.pow(2, 4))
console.log(Math.min(2, 5, 9))
console.log(Math.max(2, 5, 9))
console.log(Math.random()) //between zero to one
console.log(Math.floor(Math.random()*10)+1)

//ternary operator
let testScore=79;
let myGrade = testScore>89 ? "A"
: testScore>79 ? "B"
: testScore>69 ? "C"
:testScore>49 ? "D"
: "Fail"
console.log(`My Grade is ${myGrade}`)

//rock paper scissor
let playerOne="rock"
let computer="paper"
let result = playerOne===computer? "Tie!"
: playerOne==="rock" && computer==="paper" ? "Computer Wins!"
: playerOne==="paper" && computer==="scissors" ? "Computer Wins!"
: playerOne==="scissors" && computer ==="rock" ? "Compter Wins!"
: "playerOne wins!"
console.log(result);

