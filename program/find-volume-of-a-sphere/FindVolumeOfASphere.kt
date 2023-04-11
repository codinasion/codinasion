fun main() {
    print("Enter hours : ")
    println()
    var input = readLine()

    try {
        println("Volume of sphere with radius $input = " + FindVolumeOfASphere(input!!.toDouble()))
    } catch (exception: Exception) {
        println("Input string was not in a correct format")
    }

}

private fun FindVolumeOfASphere(radius: Double): Double {
    val pie = 3.141592653589793238;
    val parm: Double = 4.0/3.0
    val vol = parm * radius * radius * radius * pie

    return  vol
}