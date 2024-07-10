fun main() {
    val numArray = intArrayOf(1, 2, 3, 4, 5)
    var sum = 0
    numArray.forEach { x -> sum += x; }
    val average = sum / numArray.size
    println("The average is:$average")
}