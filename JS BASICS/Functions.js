function getUserNamefromEmail(email){
    return email.slice(0, email.indexOf("@"))
}

console.log(getUserNamefromEmail("yashaswikumarmishra@gmail.com"))

const toProperCase = (username) =>{
    return username.charAt(0).toUpperCase() + username.slice(1,(username.length)).toLowerCase()
}

console.log(toProperCase("yAshASwi"))

//var, let and const

var x=1;
var x=2; //allows redeclaration
x=7; //reassignment allowed

let y=2
/* let y=5 */ //error
y=9 //reassignment allowed

const z=1;
/* const z=5; error
z=7; error */

//Scope
var a=1;
let b=2;
const c=3;

console.log(`global: ${a}`)
console.log(`global: ${b}`)
console.log(`global: ${c}`)

function myFunc(){
    var a=10;
    const c=5;
    /* console.log(`function: ${a}`)
    console.log(`function: ${b}`)
    console.log(`function: ${c}`) */

    {
        var a=11;  //function scoped
       const c=6;  //block scoped
        console.log(`block: ${a}`)
        console.log(`block: ${b}`)
        console.log(`block: ${c}`)
    }
    console.log(`function: ${a}`)
    console.log(`function: ${b}`)
    console.log(`function: ${c}`)
}

myFunc()
