/**
* Find PI to the nth value
*
* Returns PI to the given decimal places with an upper limit of 20
*/


function findPi(val) {
  if(val === undefined) {
    return Math.PI
  }
  else if(val <= 20) {
    return Math.PI.toFixed(val);
  }
  return false;
}

console.log(findPi()); // Returns default value of PI to 15 decimals
console.log(findPi(5)); // Returns PI to 5 decimals
console.log(findPi(25)); // false