// JavaScript File
// З способи для виведення інфи для користувача!!!

//alert("Hello Word!");         //вивід на модальне віконце
//console.log(`1111`)           //вивід на консоль
//document.write('hello word');   // вивід на сторінку , але не дуже правильно!

//Змінні:
  //змінна.   helloWord- назва змінної. "="- знак присвоєння.
   //let- це теж створ змінної. 

/*//типи даних
const num = 23;// просте число 
const str = '<p></p>'// string
const bool = true;//folse
const undef= undefined; // присвоюється саме
const n= null ;//явно немає, якби щось моглоо бути
const obj = {};//object обєкт-
const sym = Symbol ();// у 2015р .це особливий тип данних Для ключів обєкта. нічого спільного з рядками 
 */
// alert('Hello World!');
//console.log('Hello World!');

var helloWorld = 'Hello World!';
const userName = prompt('Enter your name');
prn(helloWorld + '<br>' + userName);

// Data types
const num = 42; // Number, Infinity, NaN
const str = '<p>Some text</p>'; // String
let bool = true; // Boolean - true/false

const undef = undefined; // undefined
const n = null; // null

const obj = {}; // Object

const sym = Symbol(); // Symbol

let age = Number(prompt('Your age'));
prn('You are: ' + checkAge(age));
age = age + 1;
prn('Next year you will be: ' + nextAge);


function prn(val) {
    document.write('<br>' + val);
}

// > < >= <= !== ===
function checkAge(age) {
    if ( (age >= 18) && (age <= 60) ) {
        return 'Adult';
    } else if (age < 18) {
        return 'Child';
    }
    return 'Old';
}
 Math.sqrt()