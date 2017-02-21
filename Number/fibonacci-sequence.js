/**
* Fibonacci sequence
*
* Enter a number and have the program generate the 
* Fibonacci sequence to that number or to the Nth number.
*/


function fibIndex(n) {
  if(n <= 1) {
    return n;
  } else {
    return fibIndex(n - 1) + fibIndex(n - 2);
  }
}

function fibSequence(l) {
  for(var fibArray = [0,1], i = 0, j = 0, k = 1;
    i <= l-2; // first two number already in the array
    i++, j = k, k = x) {
      x = j + k;
      fibArray.push(x);
    }
  return fibArray;
}

function fibonacci(index) {
  if(index !== undefined) {
    return "Fibonacci number at "+index+" = " + fibIndex(index) + ".\nFibonacci sequence up to "+index+" = " + fibSequence(index);
  } else {
    return "Fibonacci number not defined."
  }
}

console.log(fibonacci());   // Fibonacci number not defined.
console.log(fibonacci(5));  // 5 | 0,1,1,2,3,5
console.log(fibonacci(10)); // 55 | 0,1,1,2,3,5,8,13,21,34,55
console.log(fibonacci(15)); // 610 | 0,1,1,2,3,5,8,13,21,34,55,89,144,233,377,610
