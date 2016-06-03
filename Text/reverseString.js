/**
* Reverse a string - Javascript
*
* Prints out a reversed version of a given string
*/

function reverseString(str) {
  if(str === "") {
    return "Nothing entered";
  }
  return ( str.reverse() );
};

console.log(reverseString("The quick brown fox jumps over the lazy dog"));
console.log(reverseString("This string is now backwards"));
console.log(reverseString("sdrawkcab deretne saw I"));
