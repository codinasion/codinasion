class FindFactorialOfANumberByRecursion {

    fun findFactorial(num: Int): Int {
        if (num == 0) return 0
        return findRecursive(num)
    }

    private fun findRecursive(num: Int): Int {
        if (num == 1) return 1
        return num * findRecursive(num - 1)
    }
}