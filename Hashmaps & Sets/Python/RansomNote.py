from collections import Counter

def canConstruct(self, ransomNote: str, magazine: str) -> bool:
    magaCounter = Counter(magazine)
    for note in ransomNote:
        if note in magaCounter:
            if magaCounter[note] < 1:
                return False
            magaCounter[note] -= 1
        else:
            return False
    return True


'''
Time Complexity: O(n)
Space Complexity: O(n)
'''
