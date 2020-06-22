/**
* Check if Palindrome - Javascript
*
* Returns if a given string reads the same forwards and backwards.
*/

function isPalindrome(word) {
  if(word === "") {
    return "No word entered";
  }
  return ( word.toLowerCase() === word.toLowerCase().split('').reverse().join('') );
};

console.log(isPalindrome("monitor")); // false
console.log(isPalindrome("RaceCar")); // true
console.log(isPalindrome("1010101")); // true
