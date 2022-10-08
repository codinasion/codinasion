func maxSubarraySumCircular( nums: [Int]) -> Int {
        if (nums.count == 0) {
            return 0
        }
    
        var sum = nums[0]

        var currMax = nums[0]
        var currMin = nums[0]
        var maxTotal = nums[0]
        var minTotal = nums[0]
        
        var i = 1

        while (i < nums.count) {
        
            let val = nums[i]

            currMax = max(val, currMax + val)
            maxTotal = max(currMax, maxTotal)

            currMin = min(val, currMin + val)
            minTotal = min(minTotal, currMin)

            sum += val
            i += 1
        }

        if (sum == minTotal){ 
            return maxTotal
        }

        return max(sum - minTotal, maxTotal)
    }
    
var arr = [1,-2,3,-2]
print(maxSubarraySumCircular(nums:arr))
