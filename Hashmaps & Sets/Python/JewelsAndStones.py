def numJewelsInStones(self, jewels: str, stones: str) -> int:
        jewel_set = set(jewels)  # Create a set for fast lookups
        count = 0
        for stone in stones:
            if stone in jewel_set:
                count += 1
        return count

Time Complexity: O(N+M)
Space Complexity: O(N+M)
