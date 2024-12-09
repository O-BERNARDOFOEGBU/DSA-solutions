def isPalindrome(self, s: str) -> bool:
        cleaned=[]
        for i in s:
            if i.isalnum():
                cleaned.append(i.lower())
        return cleaned == cleaned[::-1]

'''
Time complexity: O(n)
Space complexity: O(n)
'''
