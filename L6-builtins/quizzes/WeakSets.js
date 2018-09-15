/* 
 * Udacity Front-End Developer Nanodegree
 * Object Oriented JavaScript
 * Lesson 6-9 Programming Quiz:  Built-ins - Working with WeakSets (3-2)
 * 
 * Directions:
 * Create the following variables:
 * 
 * uniqueFlavors and give it the value of an empty WeakSet object
 * flavor1, and set it to the object { flavor: 'chocolate' }
 * flavor2, and set it to an object with a property of flavor and a value of your choice
 * 
 * Use the .add() method to add the objects flavor1 and flavor2 to uniqueFlavors.
 * 
 * Use the .add() method to add the flavor1 object to the uniqueFlavors set, again.
 *  
 */

// solution

const uniqueFlavors = new WeakSet();

const flavor1 = { flavor: 'chocolate' };

const flavor2 = { flavor: 'vanilla' };

uniqueFlavors.add(flavor1);

uniqueFlavors.add(flavor2);

uniqueFlavors.add(flavor1);

console.log(uniqueFlavors);