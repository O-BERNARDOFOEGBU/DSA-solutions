function reverseString(s: string[]): void {
    let low = 0
    let high = s.length - 1
    while (low < high) {
        [s[low], s[high]] = [s[high], s[low]]
        low += 1
        high -= 1
    }
};

/**
Time complexity: O(n)
Space complexity: O(1)
 */
