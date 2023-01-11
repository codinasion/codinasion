fun main() {
    print("Input : ")
    println()
    var input = readLine()

    println("Sum of natural number $input using recursion is : " + FindSumOfNNaturalNumbersByRecursion(input!!.toInt()))

}

private fun FindSumOfNNaturalNumbersByRecursion(num: Int): Int {
    val sum = addNumbers(num)

    return sum
}

private fun addNumbers(num: Int): Int {
    if (num != 0)
        return num + addNumbers(num - 1)
    else
        return num
}