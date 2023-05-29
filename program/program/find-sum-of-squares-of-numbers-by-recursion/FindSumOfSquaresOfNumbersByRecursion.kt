class FindSumOfSquaresOfNumbersByRecursion {
    fun sumOfSquares(nums: IntArray): Int {
        return recursiveSum(nums, 0)
    }

    private fun recursiveSum(nums: IntArray, index: Int): Int {
        if (index > nums.lastIndex) return 0
        return nums[index] * nums[index] + recursiveSum(nums, index + 1)
    }

}