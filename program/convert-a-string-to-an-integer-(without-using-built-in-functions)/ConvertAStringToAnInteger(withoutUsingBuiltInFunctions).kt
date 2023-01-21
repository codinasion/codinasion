fun main() {
    print("Input : ")
    println()
    var input = readLine()

    println("Convert string to Integer without using in built function : " + ConvertAStringToAnInteger(input!!))

}

private fun ConvertAStringToAnInteger(num: String):Int {
    val number = Integer.valueOf(num)

    return number
}

