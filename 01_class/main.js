let a = 10
let b = 20
let c = '30'

// console.log(a+b) 
// console.log(typeof(a+c)) 
// console.log(a+c) // answer is 1030 bcz c is string and + operator will convert a to string and concatenate

// console.log('the sum of a and b is '+ a + b) // the answer is 1020 bcz of + operator precedence + operator will concatenate a and b as strings

// console.log('the sum of a and b is ' + (a+b)) // answer is 30 bcz of parentheses we know that we want to add a and b first bcz of operator precedence

// console.log(a+b + 'is the sum of a and b') // answer is 30 is the sum of a and b bcz of operator precedence + operator will add a and b first then concatenate the string
//! type coercion happens when we use + operator with a string and a number, the number is converted to string and concatenated 
// console.log('1' - 1) // answer is 0 bcz - operator will convert '1' to number and subtract 1 from it

// let x = prompt('what is your name?') // prompt will only be run in browser, it will not work in node.js
//! Type Casting
// x = Number(x) // if string is not a number it will return a NaN

//! Swepping Variables
let u = 'apple';
let v = 'banana';
let z ;
z = u // z is now apple
u = v // u is now banana
v = z // v is now apple
// console.log(u)
// console.log(v)// now u is banana and v is apple and values are swapped 

//? anathor method to swap variables
//* another method to swap variables without using a third variable 
let e = 10
let f = 20
// e = e + f
// f = e - f 
// e = e - f
// console.log(e, f) 
//? destructuring assignment to swap variables
// [e, f] = [f, e] // now e is 20 and f is 10
// console.log(e, f) // 20 10

let g = 12
let h = 5
// console.log(Math.floor(g/h)) // 2, floor will return the largest integer less than or equal to the given number
// console.log(Math.ceil(g/h)) // 3, ceil will return the smallest integer greater than or equal to the given number

//! Logical operators
//? there are three logical operator in javascript  &&, ||, !
// console.log(12 > 10 && 10 < 29)
// console.log(10 > 20 | 12)


//! Unary operators
//? unary operators are operators that operate on a single operand like --, ++, +, - 
let i = 10
let j = i++
// console.log(j)
// console.log(i) // output is 11
let k = 20
let l = ++k
// console.log(l) // output is 21 bcz ++ operator will increment the value of k before assigning it to l
let m = 30
let n = --m
// console.log(n)
let o = 40
let p = o--
// console.log(p)
let q = 11
q = q++ + ++q
// console.log(q)
//? we can also use unary operators with boolean values
let r = true
// console.log(++r) 
let t = 10
// let s = ++(t++)
// console.log(s)

console.log(typeof Number) //* it return string bcz typeof operator always returns a string
