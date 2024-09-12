def sortedSquares(self, nums: List[int]) -> List[int]:
        low = 0
        high = len(nums) - 1
        result = []
        while low <= high:
            if abs(nums[low]) > abs(nums[high]):
                result.append(nums[low]**2)
                low += 1
            else:
                result.append(nums[high]**2)
                high -= 1
        result.reverse()
        return result

'''
Time complexity: O(n)
Space complexity: O(1)
'''
