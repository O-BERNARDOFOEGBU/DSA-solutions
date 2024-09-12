def maxNumberOfBalloons(self, text: str) -> int:
    counter = {}
    for i in text:
        counter[i] = counter.get(i,0) + 1
    count = min(counter.get("b",0),counter.get("a", 0),counter.get("n",0),(counter.get("o",0)//2),(counter.get("l",0))//2)
    return count

'''
Time: O(n)
Space: O(1)
'''
