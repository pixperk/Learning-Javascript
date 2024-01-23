//Callback
/* function firstFunction(parameters, callback){
//dostuff
callback()
}

firstFunction(para, ()=>{
    secondFunction(para, ()=>{
        thirdFunction(para, ()=>{
            
        })
    })
}) */

/* const myPromise = new Promise((resolve, reject)=>{
    const error = false;
    if(!error){
        resolve("Resolved the promise")
    }else {
        reject("NO! REJECTED THE PROMISE")
    }
}) */

/* console.log(myPromise)

myPromise.then(value=>{
    return value+1
})
.then(newValue => {
    console.log(newValue)
})
.catch(err=>{
    console.error(err)
})
 */

/* const myNextPromise = new Promise((resolve, reject)=>{
    setTimeout(function(){
        resolve("myNextPromise resolved")
    }, 3000)
})

myNextPromise.then(value => {
    console.log(value)
})

myPromise.then(value => {
    console.log(value)
}) */
/* 
const myUsers = {
    userList : []
}

const myCoolFunction=async () =>{
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const jsonUserData = await response.json()
    return jsonUserData
}

const anotherFunc = async () => {
    const data=await myCoolFunction()
    myUsers.userList = data
    console.log(myUsers.userList)
}

anotherFunc()
console.log(myUsers.userList) */
//Fetch returns a promise
/* const users=fetch("https://jsonplaceholder.typicode.com/users")
.then(response => {
    return response.json()
})
.then(data => {
    data.forEach(user => {
        console.log(user)
    })
})

console.log(users) */

//workflow function

const getAllUserEmails = async ()=> {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const jsonUserData = await response.json()
    
    const userEmailArray = jsonUserData.map(user => {
        return user.email;
    })
   postToWebPage(userEmailArray)
}

const postToWebPage = (data) => {
    console.log(data)
}

getAllUserEmails()

//2nd parameter of fetch is a object
const getDadJoke = async () => {
    const response = await fetch("https://icanhazdadjoke.com",
    {
        method : "GET",
        headers : {
            Accept : "application/json"
        }
    })
    const jsonJokeData = await response.json()
    console.log(jsonJokeData)
}

getDadJoke()

const jokeObj = {
    id: 'SvzIBAQS0Dd', 
joke: 'What did the pirate say on his 80th birthday? Aye Matey!'
}

const postData = async (jokeObj) => {
    const response = await fetch("https://httpbin.org/post",
    {
        method : "POST",
        headers : {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(jokeObj)
    })
    const jsonResponse = await response.json()
    console.log(jsonResponse)
}

postData(jokeObj)

const getDataFromForm = () =>{
    const requestObj = {
        firstName : "Bruce",
        lastname : "Lee",
        categories : ["nerdy"]
    }
    return requestObj
}

const buildRequestUrl = (requestData)=>{
    return `https://api.icndb.com/jokes/random?firstName=${requestData.firstName}&lastName=${requestData.lastName}&limitTo=${requestData.categories}`
}

const requestJoke = async (url) => {
    const response = await fetch(url)
    const jsonResponse = await response.json()
    const joke = jsonResponse.value.joke
    postJokeToPage(joke)
}

const postJokeToPage = (joke) => {
    console.log(joke)
}

const processJokeRequest = async () => {
    const requestData = getDataFromForm()
    const requestUrl = buildRequestUrl(requestData)
    await requestJoke(requestUrl)
    console.log("Finished")
}

processJokeRequest()
