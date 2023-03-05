fun main() {
    print("Enter Weeks : ")
    println()
    var input = readLine()
    println("$input weeks = " + (input!!.toInt() * 7) + " days")
}
