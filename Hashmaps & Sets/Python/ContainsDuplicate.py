def containsDuplicate(self, nums: List[int]) -> bool:
        return len(nums) != len(set(nums))

'''
Approach

Comparing length of original nums array to lenth of set
of array. if there any duplicate in nums array, length of 
nums and set of nums will be different.

Complexity

Time complexity: O(n)
Space complexity: O(n)
'''
