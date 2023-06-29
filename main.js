//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

// console.log(person3)

// let info = Object.values(person3.pizza)
// for(let i = 0;i < info.length;i++){
// console.log(info[i])
// }

// console.log(person3.tacos)

// console.log(person3.burgers)

// let info1 = Object.values(person3.ice_cream)
// for(let i = 0;i < info1.length;i++)
// console.log(info1[i])


// for (property in person3.shakes['oberwise']){
// let info3 = (Object.values(person3.shakes[0]))
// for(let i =0; i <info3.length;i++){
//     console.log(info3[i])
// }

function viewfood(person3){
    let info = Object.values(person3.pizza)
for(let i = 0;i < info.length;i++){
console.log('pizza: ',info[i])
}{
    console.log('Tacos: ',person3.tacos)
}{
    console.log('Burgers: ',person3.burgers)
}{
    let info1 = Object.values(person3.ice_cream)
    for(let i = 0;i < info1.length;i++)
    console.log('ICE_CREAM: ',info1[i])
}{
    let info2 = (Object.values(person3.shakes[0]))
    for (let i = 0; i < info2.length;i++){
        console.log('SHAKES: ', info2[i])
    }
    
}

}
viewfood(person3)



//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

function someone(name,age){
    this.name = name;
    this.age = age;

    this.printInfo = function(){
        console.log(`My name is ${name} i am ${age} yars old`)
    };
    this.plusAge = () => {
        age ++;
    };
}

let me = new someone('ali',66)
me.printInfo()
me.plusAge()

let p1 = new someone('adam',15)
let p2 = new someone('dave',88)


//incrementing p1 by 3
p1.plusAge();
p1.plusAge();
p1.plusAge();
p1.printInfo()
p2.printInfo()



// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/


let wordCal = (word) => {
    return new Promise((resolve, reject) =>{
        if (word.length > 10){
            reject(word);
        }else {
            resolve(word);
        }
    })
}
wordCal("abcdefghijk")
.then((result) => {
    console.log(`${result} is a small word `)
}).catch((result) => {
    console.log(`${result} is a big word`)
})

wordCal("abcde")
.then((result) => {
    console.log(`${result} is a small word `)
}).catch((result) => {
    console.log(`${result} is a big word`)
})

