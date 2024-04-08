console.log("Hello World!");

// Data Types
// Diff b/w Type Based PL and Dynamic PL
//Java: int a = 10 : byte short int long, float, double, boolean, char
//Python: a = 10 : int, float, str, list, tuple, set, dict etc...
//JavaScript : var a = 10

//Variable: Variable holds the value and store the value
//var a = 10 ; "var" is a keyword, "a" is  variable, "=" is operator, "10" is value

//String
var a = "sai"
console.log(a, typeof(a))  // sai string

//Number
var b = 10
console.log(b, typeof(b)) // 10 number

var c = 10.5
console.log(c, typeof(c)) //10.5 number

//boolean
var d = true
var e = false

console.log(d, typeof(d), e, typeof(e)) // true boolean false boolean

//Array (list in python)
var a1 = [10, 20, 30, 40, 50]
console.log(a1, typeof(a1)) // [ 10, 20, 30, 40, 50 ] object

//Object (dict in python)
var emp = {
    'firstName': 'Sai',
    'lastName': 'Kiran'
}
console.log(emp, typeof(emp)) 

//null
var ab = null
console.log(ab, typeof(ab))  // null object

//undefined
var abc
console.log(abc, typeof(abc))

abc = "Hello World"

console.log(abc, typeof(abc)) //Hello World string

abc = "Hello World Python"

console.log(abc, typeof(abc)) //Hello World string