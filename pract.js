let person = {
    name : 'joseph',
    age : 28,
    color : 'brown'
}
person['height']=188
person.age  =44
// delete person.height
// console.log(person)


let school_class ={
    students : {
        name : 'jhon',
        age : 18,  
    },
    chairs : 28,
    teachers : {
        'math' : ['adam', 'robert'],
        'sience' : 'ahmed'

    }
}
// console.log(school_class)
// console.log(school_class['students']['age'])
// console.log(school_class['chairs'])
// console.log(school_class['teachers']['math'][1])
// console.log(school_class['teachers']['sience'])

// for (property in school_class){
//     console.log(property)
// }

// let x = console.log(Object.keys(school_class))
// let x1 = console.log(Object.values(school_class))

// console.log(Object.keys(school_class.students))
// let info = Object.values(school_class.students)
// for (let i = 0; i<info.length;i++){
//     console.log(info[i])
// }


function Human(name, age, height, weight, stauts, job = false){
    this.name = name;
    this.age = age;
    this.height = height;
    this.weight = weight;
    this.stauts = stauts;
    this.job = job;

    this.printInfo = function() {
        console.log(`my name is ${this.name} i am ${this.age} also i am ${this.height} cm i weight ${this.weight} and i don't have ${job}`)
    };

}

let person1 = new Human('ahmed',25,190,80,'single',false)
person1.printInfo



class Player{
    constructor(name,age,height,foot,position,team,nationality){
        this.name = name;
        this.age = age;
        this.height = height;
        this.foot = foot;
        this.position = position;
        this.team = team;
        this.nationality = nationality;
    }
    printInfo(){
        console.log(`this is ${this.name} he is ${this.age} also he is ${this.height} cm he is ${this.foot} he playes ${this.position} he playes for ${this.team} and he is from ${this.nationality}`)
    }
}
let player = new Player('messi',37,'168','left','right wing','maiami','arentena');
player.printInfo()



let first = () =>{
    setTimeout(() => (console.log('hellllllo')), 8000);
}

let firsecondst = () =>{
    setTimeout(() => (console.log('hellllllloooooooooooooooooo')), 4000);
}

first()
firsecondst()


let biggerTen = (num) => {
    return new Promise((resolve, reject) => {
        if(num <= 10){
            resolve(num);
        }else{
            reject(num);
        }
    })
}

biggerTen(1)
.then((result) => {
    console.log(`${result} ids less than 10`)
}).catch((result) => {
    console.log(`${result} bigger than ten`)
});