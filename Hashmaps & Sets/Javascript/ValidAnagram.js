`
Valid Anagram

Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false
 

Constraints:

1 <= s.length, t.length <= 5 * 104
s and t consist of lowercase English letters.
 

Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?
`;

function isAnagram(s, t) {
  // If lengths are different, they can't be anagrams
  if (s.length !== t.length) {
    return false;
  }

  // Convert strings to arrays, sort them, and join back into strings
  let sortedS = s.split("").sort().join("");
  let sortedT = t.split("").sort().join("");

  // Compare the sorted strings
  return sortedS === sortedT;
}

// Example usage:
console.log(isAnagram("anagram", "nagaram")); // Output: true
console.log(isAnagram("rat", "car")); // Output: false

// Complexity:
// Time Complexity: Sorting the strings takes O(n log n) time, where n is the length of the string.
// Space Complexity: The space complexity is O(n) due to the space required to store the sorted arrays.
