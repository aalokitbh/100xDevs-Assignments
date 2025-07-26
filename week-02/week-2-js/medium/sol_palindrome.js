/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  // your code here
  let filteredString='';
  const LowerString = str.toLowerCase().split("");
  LowerString.forEach((elements) => {
    if((elements>='a' && elements <='z') || (elements >='0' && elements <='9')) {
      filteredString += elements;
    }
  })
  let left = 0;
  let right = filteredString.length - 1;

  while (left < right) {
    if (filteredString[left] !== filteredString[right]) {
      return false;
    }
    left++;
    right--;
  }
return true;
}

module.exports = isPalindrome;

