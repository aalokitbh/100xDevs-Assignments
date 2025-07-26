/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
    let NumOfVowels =0;
    const refinedString = str.toLowerCase().split("");
    refinedString.forEach((element) => {
      if("aeiou".includes(element)) {
        NumOfVowels++
      }
    })
    return NumOfVowels;
}

module.exports = countVowels;