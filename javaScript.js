// 1. Why do you call javascript as dynamic language?
//Ans:-  Javascript is a dynamic language means data types  of the variable
// can change during run time.

// 2. How does Javascript determine data types?
//Ans:- Javascript determines data types depending on the value assigned

// 3. What is typeof functions ?
//  4. How to check data type in javascript ?

// What are different datatypes in javascript?
// ANs:- There are 8 data types in javascript
// mainly divide into :- 1. Primitive
//   2. Objects

// Primitive:-
// 1. string, 2. number 3. null, 4. boolean, 5. big Int, 6.symbol,7. undefined;

// Objects:-
//          var obj = new Object()

// Explain Undefined Data types ?
// Ans:- variable has been declared but no value is assigned to it.
// eg :- var x;


// What is null
// Ans:- Null indicates intentional absence of data. Null indicates its not Zero,
// It's not empty its just absence of data.
// eg:- var n = null;

// differentiate  Null Vs Undefined?
// Null :- We assign value NULL, it indicate absence of data,
// Undefined:- variable has been created but value is not assigned.

// Explain JavaScript Hoisting?
// Ans:- It's a mechanism where variable and function declaration are moved to
// the top of the scope.

// 11 What are global variables?
// Global variable are accessible through out the webpage or the document.

// What happen when you declare variable without VAR keyword?
// Ans:- Without Var varibale becomes Global.

// What is the use of "Use Strict"?
// Ans:- "Use Strict" strictly checks if the variable is defined using
// "var" keyword.

//Can we Avoid global variables?
// Ans:-  Its difficult to avoid global variables. But we can
// organize it properly by doing two things:-
// 1. Put global variable in a proper Namespace. Module pattern using Closures and IIFE.


// What are Closures?
// Ans:- Closures are functions inside function and it makes a normal
// function statefull
// Why do we need Closures  ?
// Ans It is self Contained modules --> self Contained State --> Solves global variable problem.

//20. Explain IIFE?
//Immediatetely Invoked Function Expression;
// It's an anonymous function which gets immediately invoked.

// What is name collission in global scope?
// Name collision happens when same name function and variable are declared.

// What is the use of IIFE ?
// Because IIFE does not have name, So there is no way you can get name collision.

// WHat is different b/w normal function and IIFE?
// A normal function has a name while IIFE does not have name.
// so with the normal function you can have a name collision but with IIFE
// you will not have name collision.

// What is design patterns?
// It is time tested architecture solutions so to create a single instance
// we can use singleton pattern, If the object creational process is complex
// We can use factory pattern and so.
// Which is the most used design pattern?
// Module design pattern or Module revealing pattern.
// which has 2 big advantages:-
//  Self-contained independent components.
//  Provides Encapsulation(we can control what we want to public or what not) and Abstraction.


// What are the various ways to create JavaScript objects?
// ANs:- 4 ways to create JavaScript objects.
{/*
 <script>
    // literal
    var pat={"name":"","address":""}
    pat.Admit = function(){
        alert('I am admitted');
    }

    // object.create
    var patnew = Object.create(pat);
    patnew.age = 10;

    //3. constructor
    function Patient(){
        this.name = "";
        this.address = "";
        this.Admit = function(){

        }
    }

    var pat1 = new Patient();

    //4. class
    class PatientClass{
        var p = new PatientClass();
    }

</script> 
*/}