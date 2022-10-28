fun drawDiamond(rows: Int) {
    var k = 0

    for (i in 1..rows) {
        for (space in 1..rows - i) {
            print("  ")
        }

        while (k != 2 * i - 1) {
            print("* ")
            ++k
        }

        println()
        k = 0
    }
        
    for (i in rows-1 downTo 1) {

        for (space in 1..rows - i) {
            print("  ")
        }

        for (j in i..2 * i - 1) {
            print("* ")
        }

        for (j in 0..i - 1 - 1) {
            print("* ")
        }

        println()
    }
}

fun main(args: Array<String>) {
    print("Enter No. to Print Diamond Pattern: ")
    val num = readln().toInt()
    drawDiamond(num)
}