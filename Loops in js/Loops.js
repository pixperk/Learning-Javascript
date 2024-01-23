/* let myNumber=0
while(myNumber<50){
    ++myNumber
    console.log(myNumber);//1 to 50
    
}

do {
    myNumber+=2
    console.log(myNumber);
}while(myNumber<50) */

/* for(let i = 1; i<=10; ++i){
    console.log(i)
} */
let nameuser="Yashaswi"
/* for(let i=0; i<nameuser.length; ++i){
    console.log(nameuser.charAt(i))
} */

let counter=0;
let myLetter;
/* while(true){
    myLetter=nameuser[counter]
    console.log(myLetter)
    if(myLetter==="i") break;
    counter++
}
 */
while(counter<nameuser.length){
    myLetter=nameuser[counter]
    console.log(myLetter)
    if(counter===1){
        counter+=2;
        continue;  //counter=3 is skipped
    }
    if(myLetter==="i") break;
    counter++
}
counter=0;
do{
    myLetter=nameuser.charAt(counter)
    console.log(myLetter)
    counter++
}while(counter<nameuser.length)