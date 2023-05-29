fun main() {
    print("Enter paise : ")
    println()
    var input = readLine()

    println("$input pasie = " + ConvertPaiseToRupees(input!!.toDouble()) + " rupees")

}

private fun ConvertPaiseToRupees(paise: Double): Double {
    var rupees = paise / 100

    return rupees
}
