fun main() {
    print("Input : ")
    println()
    var input = readLine()

    println("Sum of natural number $input is : " + FindSumOfNNaturalNumbers(input!!.toInt()))

}

private fun FindSumOfNNaturalNumbers(num: Int): Int {
    var sum = 0

    for (i in 1..num) {
        sum += i
    }

    return sum
}