from collections import Counter
class Solution:
    def canConstruct(self, ransomNote: str, magazine: str) -> bool:
        magaCounter = Counter(magazine)
        for note in ransomNote:
            if magaCounter[note] < 1:
                return False
            magaCounter[note] -= 1
        return True

'''
Optimized
Time Complexity: O(n)
Space Complexity: O(n)

'''
