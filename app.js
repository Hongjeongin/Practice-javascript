
/**
 * this is study about alert
 */
//alert("hi");

/**
 * this is study about console.log()
 */
console.log(123123123);
console.log("lalalalalala");

/**
 * this is study about variable
 */
console.log(5 + 2);
console.log(5 * 2);
console.log(5 / 2);

const num1 = 5;
const num2 = 2;

const myName = "joker";

console.log(num1, num2);
console.log(num1 + num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log("hello " + myName);

/**
 * this is study about what is different 'const' and 'let'
 */

let a = 5;
let b = 2;
let myNewName = "joker_I";

console.log(a, b, myName);
console.log("your name is " + myNewName);

myNewName = "joker";
console.log("your new name is " + myNewName);

/**
 * this is study data type about boolean, null and undefined
 */
const thisIsGood = true;
console.log(thisIsGood);

const thisIsNull = null;
let something;
console.log(something, thisIsNull);

/**
 * this is study data structure about 'Array'
 */
const mon = "monsday";
const tue = "tuesday";
const wed = "wednesday";
const thu = "thursdayt";
const fri = "friday";
const sat = "saturday";
const sun = "sunday";

const daysOfWeek = [mon, tue, wed, thu, fri, sat, sun];

const nothing = [1, 2, "hello", true, null, "joker", undefined, false]

console.log(daysOfWeek);
console.log(nothing);
console.log("5day of every week is " + daysOfWeek[4]);

daysOfWeek.pop(sun);
console.log(daysOfWeek);
daysOfWeek.push(sun);
console.log(daysOfWeek);

/**
 * this is study data type about 'Object'
 */
const infoOfJoker = {
    name: "joker",
    age: 26,
    hobby: "play pingpong"
};

console.log(infoOfJoker);
console.log(infoOfJoker.name);

/**
 * declare function and call function
 */
function printHello() {
    console.log("Hello im " + myName);
}
printHello();

/**
 * function step 2
 */
function plus(num1, num2) {
    console.log(num1 + num2);
}
function minus(num1, num2) {
    console.log (num1 - num2);
}
function multi(num1, num2) {
    console.log (num1 * num2);
}
function divis(num1, num2) {
    console.log (num1 / num2);
}
a = 20;
b = 10;

plus(a, b);
minus(a, b);
multi(a, b);
divis(a, b);

/**
 * function step 3
 */
const player = {
    name: "joker",
    sayHello: function(otherPersonsName = "nobody") {
        console.log("hello", otherPersonsName, "my name is joker");
    }
};

player.sayHello();
player.sayHello("jeongin");

/**
 * colculator obj
 */
const colculator = {
    add: function(a = 1, b = 1) {
        return a + b;
    },
    minus: function(a = 1, b = 1) {
        return a - b;
    },
    multi: function(a = 1, b = 1) {
        return a * b;
    },
    divis: function(a = 1, b = 1) {
        return a / b;
    },
    power: function(a = 2, b = 1) {
        return a ** b;
    }
};

const cal = colculator;

console.log(cal.add(20, 5));
console.log(cal.minus(20, 5));
console.log(cal.multi(20, 5));
console.log(cal.divis(20, 5));
console.log(cal.power(20, 5));

/**
 * Conditionals and if 
 */
/*
const age = prompt("How old are you?");

console.log(age);
console.log(typeof age);

convert_of_age = parseInt(age);

if (isNaN(age) || age < 0) {
    console.log("Please write a number");
} else if (age < 18) {
    console.log("You are too young");
} else if (age >= 18 && age <= 50) {
    console.log("You can drink");
} else if (age > 50 && age <= 80) {
    console.log("You should exercise");
} else if (age > 80) {
    console.log("You can do whatever you want")
}
*/

/**
 * Javascript and html
 */
//document.title = "hello js";

/**
 * getElementById
 */
const title = document.getElementById("title");
console.log(title);
title.innerText = "Hi~";
console.log(title);

/**
 * Searching For Elements
 */
const hellos = document.getElementsByClassName("hello");
const title_2 = document.getElementsByTagName("h1");

console.log(hellos);
console.log(title_2);

const title_1 = document.querySelector(".hello h1");
console.log(title_1);

const title_all = document.querySelectorAll(".hello h1");
console.log(title_all)

/**
 * Events
 */

function handleTitleClick() {
    console.log("title was clicked!");
}



function handleMouseEnter() {
    title_1.style.color = "blue";
}

function handleMouseLeave() {
    title_1.style.color = "black";
}

title_1.addEventListener("click", handleTitleClick);
title_1.addEventListener("mouseenter", handleMouseEnter);
title_1.addEventListener("mouseleave", handleMouseLeave);