/* 
 * Udacity Front-End Developer Nanodegree
 * Object Oriented JavaScript
 * Lesson 5-11 Programming Quiz:  Functions - Using Default Function Parameters (2-2)
 * 
 * Directions:
 * Create a buildHouse() function that accepts an object as a default parameter. The object should set the following properties to these default values:
 * 
 * floors = 1
 * color = 'red'
 * walls = 'brick'
 * The function should return the following if no arguments or any empty object is passed to the function.
 * 
 * Your house has 1 floor(s) with red brick walls.
 *  
 */


 // solution
 function buildHouse({floors = 1, color = ['red'], walls = ['brick']} = {}) {
    return `Your house has ${floors} floor(s) with ${color} ${walls} walls.`;
}


 //tests
 console.log(buildHouse()); // Your house has 1 floor(s) with red brick walls.
 console.log(buildHouse({})); // Your house has 1 floor(s) with red brick walls.
 console.log(buildHouse({floors: 3, color: 'yellow'})); // Your house has 3 floor(s) with yellow brick walls.
