"use strict"


function pow(x, y) {
    let result = 1; 
        for (let i = 0; i < y; i++) { 
            result *= x;
        }

    return result;
}
    const resultAll = pow(4,3);
    console.log(resultAll)
     

function SayHello() {
    console.log("Привіт Javascript")
}
SayHello()
SayHello()

function Greet(name) {
    console.log(`Привіт, ${name}`)
}
Greet("Валерій")


function sum(a,b) {
   return (a + b)
}
let result = sum(5, 5)
let result2 = sum(200, 345)
console.log(result)
console.log(result2)


function isAdult(age) {
    if (age >= 18) {
    return "Повнолітній"; 
    } else {
         return "Дитина"}
    }
const result = isAdult(15)
console.log(result)


function printName(n) {
    for (let i = 1; i <= n; i++) {
        console.log(i)
    }
}
printName(5)




