/*
 * Udacity Front-End Developer Nanodegree
 * Object Oriented JavaScript
 * Lesson 2-5 Quiz: Functions at Runtime - Closures

Declare a function named `expandArray()` that:

* Takes no arguments
* Contains a single local variable, `myArray`, which points to [1, 1, 1]
* Returns an anonymous function that directly modifies `myArray` by
  appending another `1` into it
* The returned function then returns the value of `myArray`

*/


// Solution

function expandArray() {
    let myArray = [1, 1, 1];

    return function() {

        myArray.push(1);

        return myArray;
    };
}

let newArray = expandArray();

console.log(newArray());