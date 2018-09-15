/* 
 * Udacity Front-End Developer Nanodegree
 * Object Oriented JavaScript
 * Lesson 6-9 Programming Quiz:  Built-ins - Using Sets (3-1)
 * 
 * Directions:
 * Create a variable with the name myFavoriteFlavors and give it the value of an empty Set object. 
 * Then use the .add() method to add the following strings to it:
 * 
 * "chocolate chip"
 * "cookies and cream"
 * "strawberry"
 * "vanilla"
 * Then use the .delete() method to remove "strawberry" from the set.
 *  
 */

// solution 

const myFavoriteFlavors = new Set();

myFavoriteFlavors.add('chocolate chip');

myFavoriteFlavors.add('cookies and cream');

myFavoriteFlavors.add('strawberry');

myFavoriteFlavors.add('vanilla');

myFavoriteFlavors.delete('strawberry');

console.log(myFavoriteFlavors);