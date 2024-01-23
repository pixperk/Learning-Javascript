const myArray = ["Eat", "Sleep", "Code"]
const myObject = {
    username: "Dave",
    hobbies: ["Eat", "Sleep", "Code"],
    logname : ()=> {
        console.log(this.username);
    },
}




localStorage.setItem("myLocalStore", JSON.stringify(myArray))
/* localStorage.clear() *//* removeItem("myLocalStore") */
const storeLenght=localStorage.length
const myLocalData = JSON.parse(localStorage.getItem("myLocalStore")
)

console.log(storeLenght)