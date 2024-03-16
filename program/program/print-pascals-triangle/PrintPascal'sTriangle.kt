import java.util.*

fun printPascalTriangle(n: Int) {
    val triangle = Array(n) { IntArray(it + 1) }

    for (i in 0 until n) {
        for (j in 0..i) {
            if (j == 0 || j == i) {
                triangle[i][j] = 1
            } else {
                triangle[i][j] = triangle[i - 1][j - 1] + triangle[i - 1][j]
            }
        }
    }

    val maxWidth = n * 2
    for (i in 0 until n) {
        val spaces = " ".repeat((maxWidth - (i * 2 + 1)) / 2)
        print(spaces)
        for (j in 0..i) {
            print("${triangle[i][j]} ")
        }
        println()
    }
}

fun main() {
    val scanner = Scanner(System.`in`)
    val n = scanner.nextInt()
    println("Input  : $n")
    println("Output : ")
    printPascalTriangle(n)
}
