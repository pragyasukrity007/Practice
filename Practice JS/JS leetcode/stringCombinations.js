/*
Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

Example 1:

Input: digits = "23"
Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
Example 2:

Input: digits = ""
Output: []
Example 3:

Input: digits = "2"
Output: ["a","b","c"]

Js code
*/

function letterCombinations(digits) {
  if (digits.length === 0) return [];
  const mapping = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };
  // With Recursion

  combinations = [];

  function backtrack(current, index) {
    // console.log("\n recursive"); // uncomment this line for better understanding of recursion
    // console.log(current, index); // uncomment this line for better understanding of recursion
    if (index === digits.length) {
      combinations.push(current.join(""));
      console.log("\ncombo: ", combinations);
      return;
    }

    const letters = mapping[digits[index]]; // abc, def, ...

    for (let i = 0; i < letters.length; i++) {
      current.push(letters[i]);
      backtrack(current, index + 1); 
      current.pop();  
    }
  }

  backtrack([], 0);

  return combinations;
}

console.log(letterCombinations("234"));
