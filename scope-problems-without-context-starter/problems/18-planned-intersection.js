/******************************************************************************
Write a function named plannedIntersect(firstArr) that takes in an array and
returns a function. When the function returned by plannedIntersect is invoked
passing in an array (secondArr) it returns a new array containing the elements
common to both firstArr and secondArr.


Example 1:
let abc = plannedIntersect(["a", "b", "c"]); // returns a function
console.log(abc(["b", "d", "c"])); // returns [ 'b', 'c' ]

Example 2:
let fame = plannedIntersect(["f", "a", "m", "e"]); // returns a function
console.log(fame(["a", "f", "z", "b"])); // returns [ 'f', 'a' ]

*******************************************************************************/
function plannedIntersect(firstArr){
  return (secondArr) => {
    let intersectionArray = [];
    for(let i = 0; i < firstArr.length; i++){
      let currentElArr1 = firstArr[i];
      for (let j = 0; j < secondArr.length; j++){
        let currentElArr2 = secondArr[j];
        if(currentElArr1 === currentElArr2){
          intersectionArray.push(currentElArr1);
        }
      }
    }
    return intersectionArray;
  }
}
// your code here

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/

try {
  module.exports = plannedIntersect;
} catch (e) {
  // catch the ref err
  module.exports = null;
}
