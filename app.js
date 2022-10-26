
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