class FindSumOfDigitsOfANumberByRecursion {
    fun findSum(num: Int): Int {
        return recursiveSum(num)
    }

    private fun recursiveSum(num: Int): Int {
        if (num == 0) return 0
        val digit = num / 10
        return num % 10 + recursiveSum(digit)
    }
}