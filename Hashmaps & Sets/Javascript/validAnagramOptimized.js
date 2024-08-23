function isAnagram(s, t) {
  // If lengths are different, they can't be anagrams
  if (s.length !== t.length) {
    return false;
  }

  // Create a frequency counter for characters in string s
  let frequencyCounter = {};

  //   frequencyCounter[char]: This is accessing the value associated with the key char in the frequencyCounter object. char is a character from the string.

  //   || 0: The || (logical OR) operator is used here to handle cases where the character char does not yet exist in the frequencyCounter object. If frequencyCounter[char] is undefined (which happens if the character has not been encountered before), then 0 is used as the default value.

  //   If frequencyCounter[char] is undefined (i.e., the character hasn't been counted yet), the expression (frequencyCounter[char] || 0) will result in 0.
  //   If frequencyCounter[char] has a value (e.g., it’s already been counted once or more), the expression (frequencyCounter[char] || 0) will result in the current count.
  //   + 1: This simply increments the count by 1.

  for (let char of s) {
    frequencyCounter[char] = (frequencyCounter[char] || 0) + 1;
  }

  // Iterate through string t and decrease the count in the frequency counter
  for (let char of t) {
    if (!frequencyCounter[char]) {
      return false; // If the char is not found or count is zero, return false
    }
    frequencyCounter[char] -= 1;
  }

  // If we reached here, the strings are anagrams
  return true;
}

// Example usage:
console.log(isAnagram("anagram", "nagaram")); // Output: true
console.log(isAnagram("rat", "car")); // Output: false

// Complexity:
// Time Complexity: The solution runs in O(n) time, where n is the length of the strings. This is because we are iterating over each string once.
// Space Complexity: The space complexity is O(1) if we assume a fixed character set (e.g., only lowercase English letters), as the frequency counter will have at most 26 keys. Otherwise, it is O(n).
// This method is more efficient in terms of time complexity compared to the sorting approach, especially for larger strings.
