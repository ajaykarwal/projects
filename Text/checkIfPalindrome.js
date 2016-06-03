/**
* Check if Palindrome - Javascript
*
* Returns if a given string reads the same forwards and backwards.
*/

function checkWord(word) {
  if(word === "") {
    return "No word entered";
  }
  return ( word.toLowerCase() === word.toLowerCase().split('').reverse().join('') );
};

console.log(checkWord("monitor")); // false
console.log(checkWord("RaceCar")); // true
console.log(checkWord("1010101")); // true