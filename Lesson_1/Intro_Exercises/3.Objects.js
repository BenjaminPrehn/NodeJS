// --------------------------------------
// Objects
// --------------------------------------
// Exercise 1 - Retrieve value from object by key

const myObj = {"message": "Hello, earthling! I bring peace."};

// Log the message 

const test = myObj['message'];

console.log(test);

// --------------------------------------
// Exercise 2 - Defining an object. 

// Create an object that has your name and age. 

const benObj = {
    "name" : "Benjamin Prehn",
    "age": 24
};

console.log(benObj);

// --------------------------------------
// Exercise 3 - Add a property 

const stackOverflow = {};

// make a rule called isAllowed and let the value be true

console.log(stackOverflow);

stackOverflow.isAllowed = true;

console.log(stackOverflow);

// --------------------------------------
// Exercise 4 - Remove a property 

const thisSong = {"description": "The best song in the world."}

// remove the property "description" and add a property called "about" that should say "Just a tribute." 

delete thisSong.description;

console.log(thisSong);

thisSong.about = 'Just a tribute.';

console.log(thisSong);

// --------------------------------------


