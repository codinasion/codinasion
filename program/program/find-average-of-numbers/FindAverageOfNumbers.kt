fun main() {
    print("Input : ")
    println()
    var input = readLine()

    println("Average of number $input is : " + FindAverageOfNumbers(input!!))

}

private fun FindAverageOfNumbers(input: String): Double {
    val list = input.toCharArray().map(Character::getNumericValue)

    val avg = list.average()

    return avg
}