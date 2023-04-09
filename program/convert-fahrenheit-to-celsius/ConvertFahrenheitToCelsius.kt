fun main() {
    print("Enter fahrenheit : ")
    println()
    var input = readLine()
    println("$input fahrenheit = " + ((input!!.toDouble() -32) * 5/9) + " celsius")
}
