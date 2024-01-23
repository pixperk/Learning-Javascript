const myObj ={
    name: "Yash"
}

const anotherObj={
    alive: true,
    answer: 42,
    hobbies: ["Eat", "Sleep", "Code"],
    beverage:{
        morning: "coffee",
        afternoon: "Iced Tea"
    },
    action : function(){
        return `Time for ${this.beverage.morning}`
    }
}
console.log(anotherObj.alive)
console.log(anotherObj.hobbies[0])
console.log(anotherObj["answer"])
console.log(anotherObj.beverage.morning)
console.log(anotherObj.action())

/* const vehicle = {
    wheels:4,
    engine : () => {
        return "Vroom! Vroom! Vroooom!"
    }
} */
/* const truck = Object.create(vehicle)
truck.doors=2
console.log(truck)
console.log(truck.wheels)//inheritence
console.log(truck.engine()) *///inheritence
/* const car = Object.create(vehicle)
car.doors=4
car.engine=()=> "Whoosh!"
console.log(car.engine())
console.log(car.wheels)

const tesla = Object.create(car)
console.log(tesla.wheels)
console.log(tesla.engine())
tesla.engine=()=> "Shhhhhh...."
console.log(tesla.engine()) */

const band={
    vocals: "Robert Plant",
    guitar: "Jimmy Page",
    bass: "John Paul Jones",
    drums: "John Bonham"
}

/* delete band.drums
console.log(band.hasOwnProperty("drums"))
console.log(Object.keys(band))
console.log(Object.values(band))
 */
for (let job in band){
    console.log(`On ${job}, it's ${band[job]} !`)
}

f
//destructuring objects
const {guitar: myVariable,
       bass: myBass}=band;
console.log(myVariable)
console.log(myBass)

const phones = {
    iphone: {
      model: "iPhone 13",
      color: "Midnight Green",
      storage: "256GB",
    },
    samsung: {
      model: "Galaxy S21",
      color: "Phantom Gray",
      storage: "128GB",
    },
    googlePixel: {
      model: "Pixel 6",
      color: "Sorta Sunny",
      storage: "256GB",
    }
  };

  const{iphone, samsung, googlePixel}=phones
  console.log(googlePixel)

  const{model, color, storage}=iphone
  console.log(color)

  function sings({vocals}){
    return `${vocals} sings!`
  }

  console.log(sings(band))
