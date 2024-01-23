/* const view = document.querySelector("#view2")
const div = view.querySelector("div")
const h2 = div.querySelector("h2") */

//Event listener addEventListener(event, function, useCapture)

/* const doSomeThing = () => {
    alert("Doing Something");
}

h2.addEventListener("click", doSomeThing, false);
h2.removeEventListener("click", doSomeThing, false);

h2.addEventListener("click", (e)=>{
    console.log(e.target)
    e.target.textContent = "Clicked"
}) */

document.addEventListener("readystatechange", (e)=>{
    if(e.target.readyState === "complete"){
        console.log("readyState: complete");
        initApp2();
    }
})

const initApp = () => {
    const view = document.querySelector("#view2")
    const div = view.querySelector("div")
    const h2 = div.querySelector("h2")

    view.addEventListener("click", (e)=>{
        /* e.stopPropagation(); */
        view.classList.toggle("purple");
        view.classList.toggle("darkblue");
    }, false)   //true: outer to inner; false: inner to outer

    div.addEventListener("click", (e)=>{
        /* e.stopPropagation(); */
        div.classList.toggle("blue");
        div.classList.toggle("black");
    }, false)

   h2.addEventListener("click", (e)=>{
    const myText = e.target.textContent
    myText==="My 2nd View"?
    e.target.textContent="CLICKED"
    :e.target.textContent = "My 2nd View";
       /* e.stopPropagation(); */
    }, false)

    const nav = document.querySelector("nav")
    nav.addEventListener("mouseover", (e)=>{
        e.target.classList.add("height100")
    })
    nav.addEventListener("mouseout", (e)=>{
        e.target.classList.remove("height100")
    })
}

const initApp2=()=>{
    const view3 = document.querySelector("#view3")
    const myForm = view3.querySelector("#myForm")
    myForm.addEventListener("submit", (event) => {
        event.preventDefault();
        console.log("submit event");
    })
}