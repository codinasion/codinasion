fun main() {
    printInvertedPyramid(5);
}

fun printInvertedPyramid(rows: Int){
    for (i in rows downTo 1) {
        for (j in 1..i) {
            print("$j ")
        }
        println()
    }
}
