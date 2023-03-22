fun main() {
    printFlyod(5);
}

fun printFlyod(rows: Int){
    for (i in rows downTo 1) {
        for (j in 1..i) {
            print("$j ")
        }
        println()
    }
}
