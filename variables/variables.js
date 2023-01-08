// Redeclaration

// var x = 42 ;
// var x = 2137 ;
//
//  let x1 = 42 ;
// let x1 = 2137 ;//Uncaught SyntaxError: Identifier 'x1' has already been declared (at variables.js:7:5)
//
// const x2 = 42 ;
// const x2 = 2137 ; //Uncaught SyntaxError: Identifier 'x2' has already been declared (at variables.js:10:7)

// Reinitialization
// var x = 42;
// x = 2137;
//
// let x1 = 42;
// x1 = 2137;
//
// const x2 = 42;
// x2 = 2137 //Uncaught TypeError: Assignment to constant variable.

// Scopes - block, function
// block scope - dowolna para klamerek

// {
//     var y = 2137;
//     const x = 42;
// }
// console.log(x);
// console.log(y);


//function scope - ciał funkcji

// function doSmth(){
//     var y = 42;
//     let x = 42;
// }
// doSmth();
// console.log(y); //variables.js:40 Uncaught ReferenceError: y is not defined
// console.log(x);//variables.js:41 Uncaught ReferenceError: x is not defined

//scope - widoczność, dostęp do indentyfikatoprów (zmienne, funkcje, klasy)

// hoisting — przenoszenie deklaracji zmiennych (var), funkcji nazwanych i klas, na górę aktualnie przetwarzanego zasięgu
// console.log(x);
// var x = 42;
//
// var y;
// console.log(y);
// y = 42;

// doSomth();
//
// function doSomth(){
//     console.log('it works');
// }

// console.log(y);
// const y = 42; variables.js:59 Uncaught ReferenceError: Cannot access 'y' before initialization
// TDZ - temporary dead zone



