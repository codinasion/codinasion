class KadaneAlgorithm {
    func maxSubarraySum(_ nums: [Int]) -> Int {
        var maxEndingHere = nums[0]
        var maxSoFar = nums[0]
        
        for i in 1..<nums.count {
            maxEndingHere = max(nums[i], maxEndingHere + nums[i])
            maxSoFar = max(maxSoFar, maxEndingHere)
        }
        
        return maxSoFar
    }
}

let kadane = KadaneAlgorithm()
let input = [1, 2, 3, -2, 5]
let result = kadane.maxSubarraySum(input)
print("Maximum sum of a contiguous subarray: \(result)")
