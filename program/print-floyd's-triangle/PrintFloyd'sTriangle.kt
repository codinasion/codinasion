fun main() {
    printFlyod(5);
}

fun printFlyod(rows: Int){
    var number = 1
    for (i in 1..rows) {
        for (j in 1..i) {
            print("$number ")
            ++number
        }
        println()
    }
}
