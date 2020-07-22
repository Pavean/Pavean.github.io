'use strict'
const person = new Object({
    name: 'Pavel',
    age: 40,
    height: 183,
    weight: 75,
    aboutPerson: function () {
        console.log('Имя: ' + this.name + ' Возраст: ' + this.age + ' Рост: ' + this.height + ' Вес:' + this.weight);
    }
})

Object.prototype.sayWorldYes = function () { console.log('World, Yes!!!') }

const Petr = Object.create(person)

Petr.name = 'Petr'


function outSide(outVar) {

    return function inSide(inVar) {
        return `${outVar}-${inVar}`
    }

}
/*
const out1 = outSide('вне1 ', 'в1')
const out2 = outSide('вне2')

console.log(out1())
console.log(out2('в2'))
*/

function printPerson() {

    console.log(`Данные персонажа : ${this.name}, ${this.age}, ${this.height}. ${this.weight}`)

}

const p1 = { name: 'Vasya', age: 40, height: 180, weight: 80 }
const p2 = { name: 'Sasha', age: 30, height: 170, weight: 70 }

function blind(inData, inFunction) {

    return function (...args) {
        inFunction.apply(inData, args)
    }

}

blind(p1, printPerson)()
blind(p2, printPerson)();

console.log('test var and let');

if (true) {
    var testVar = true; // используем var
    console.log('testVar : ');
  };
  
console.log(testVar); // Выводит

if (true) {
    let testLet = true; // используем let
    console.log('testLet : ');
  };
  
console.log(testLet); // Prototype.js:68 Uncaught ReferenceError: testLet is not defined

