/***********************************************************************
Write a function named `smoothieMachine` that accepts any number of params and
a function.

The return function will also accept any number of params and will return a
string including all of the parameters of smoothieMachine and the return
function.

See below for examples:

let smoothie1 = smoothieMachine();

console.log(smoothie1("milk"));
// prints "I'm having a smoothie with milk"
console.log(smoothie1("kale", "spinach"));
// prints "I'm having a smoothie with milk and kale and spinach"
console.log(smoothie1("honey", "pears", "berries"));
// prints "I'm having a smoothie with milk and kale and spinach and honey and pears and berries"

let smoothie2 = smoothieMachine("apples", "bananas", "berries");
console.log(smoothie2("pineapple"));
// prints "I'm having a smoothie with apples and bananas and berries and pineapple"
***********************************************************************/

// your code here
function smoothieMachine (...arg1){
  let currentSentence = "I'm having a smoothie with".split(" ");
  for (let i = 0; i < arg1.length; i++){
    let currentEl = arg1[i];
    if(i == 0){
      currentSentence.push(currentEl);
    }
    else{
      currentSentence.push("and", currentEl);
    }
  }
  return (...arg2) => {
    for (let i = 0; i < arg2.length; i++){
      let currentEl = arg2[i];
      if(i === 0 && currentSentence.length === 5){
          currentSentence.push(currentEl);
        }
      else{
        currentSentence.push("and", currentEl);
      }     
    }
    return currentSentence.join(" ");
  }
}

let smoothie1 = smoothieMachine();

console.log(smoothie1("milk"));
// prints "I'm having a smoothie with milk"
console.log(smoothie1("kale", "spinach"));
// prints "I'm having a smoothie with milk and kale and spinach"
console.log(smoothie1("honey", "pears", "berries"));
// prints "I'm having a smoothie with milk and kale and spinach and honey and pears and berries"


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
  module.exports = smoothieMachine;
} catch (e) {
  // catch the ref err
  module.exports = null;
}
