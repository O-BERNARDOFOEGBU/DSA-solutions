function sortedSquares(nums: number[]): number[] {
    let high = nums.length - 1
    let low = 0
    const result: number[] = [];

    while (low <= high) {
        if (nums[low] ** 2 > nums[high] ** 2){
            result.push(nums[low]**2)
            low += 1
        }
        else{
            result.push(nums[high]**2)
            high -= 1
        }
    }
    result.reverse()
  return result;
};
