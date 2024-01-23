"use strict";
const makeError = () => {
    try {
        const name= "Yash";
        name = "Joe";
    } catch (err) {
       console.error(err); //console.error(err)/console.warn(err)/console.table(err)
       //console.error(err.name); 
       //console.error(err.message); 
       //console.error(err.stack); 
       /* logTheError(err.stack) */
    }
};
makeError();

function customError(message){
    this.message=message;
    this.name="customError";
    this.stack = `${this.name} : ${this.message}`
}

const newError=()=>{
    try {
        throw new customError("This is a custom error")
    } catch (err) {
        console.log(err.name)
        console.error(err.stack)
        console.log(err.message)
    }
}
newError();

const newError2=()=>{
    let i=1;
    while(i<=5){
        try {
            if(i%2!==0)
            throw new Error("Odd number")
        console.log("Even number")
        } 
        catch (err) {
            console.error(err.stack)
        }finally{
            console.log("...finally")
            
        }
        i++;
    }
    
}

newError2();