// Question 1
"use strict";
// was going to use arrow but didn't let me
const myGrades = [100, 100, 90, 73, 78, 94, 86];
//added let in front of myAverage
let myAverage = 0;
//started at 0           made length -1
for (let i = 0; i <= myGrades.length - 1; i++) {
  myAverage += myGrades[i];
}

myAverage = myAverage / myGrades.length;

console.log("My grade average is " + myAverage);

// Question 2






class InputError extends Error {}







const isANumber = aNumber => {
  if (aNumber < 0 || aNumber > 100 || isNaN(aNumber)) {
    throw new InputError("Invalid");
  }
  return aNumber;
};

try {
console.log(isANumber(200));
} catch (error) {
    if (error instanceof InputError) {
        console.log(error.message);
    } 

}

