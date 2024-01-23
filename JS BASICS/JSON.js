//JavaScript Object Notation
const myObj={
    name:"Yashaswi",
    hobbies: ["Eat", "Sleep", "Code"],
   hello : function(){
        console.log(`Hello!`)
    }
}
console.log(myObj)
console.log(myObj.name)
myObj.hello()
console.log(typeof myObj)

const sendJSON = JSON.stringify(myObj)//loses the method
console.log(sendJSON)
console.log(typeof sendJSON)
console.log(sendJSON.name)//not accessible as it's a string

const receiveJSON = JSON.parse(sendJSON)
console.log(receiveJSON)
console.log(typeof receiveJSON)