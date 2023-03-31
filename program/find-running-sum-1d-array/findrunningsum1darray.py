'''
this calculates the running sum of an array. The first element remains the same,
the following elements are a sum of itself and the directly before it
'''
def runningSum(nums):
        """
        :type nums: List[int]
        :rtype: List[int]
        """
        temp = nums[0]
        for i in range(1, len(nums)):
            temp = nums[i] + temp
            nums[i] = temp

        return nums

nums = [1,2,3,4]
print(runningSum(nums))