/**
* Find E to the nth value
*
* Returns E to the given decimal places with an upper limit of 20
*/


function findE(val) {
  if(val === undefined) {
    return Math.E
  }
  else if(val <= 20) {
    return Math.E.toFixed(val);
  }
  return false;
}

console.log(findE()); // Returns default value of E to 15 decimals
console.log(findE(5)); // Returns E to 5 decimals
console.log(findE(20)); // Returns E to 20 decimals  
console.log(findE(25)); // false  
