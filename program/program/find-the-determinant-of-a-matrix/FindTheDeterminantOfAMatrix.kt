import java.util.*

fun main(args: Array<String>) {
    val scanner = Scanner(System.`in`)
    var i: Int = 0
    var j: Int = 0
    val arr = Array(3) { IntArray(3) }
    println("Enter the input values")
    while (i < 3) {
        j = 0
        while (j < 3) {
            arr[i][j] = scanner.nextInt()
            j++
        }
        i++
    }

    findTheDeterminantOfAMatrix(arr)
}

fun findTheDeterminantOfAMatrix(arr: Array<IntArray>) {
    val determinant =
        arr[0][0] * (arr[1][1] * arr[2][2] - arr[2][1] * arr[1][2]) - arr[0][1] * (arr[1][0] * arr[2][2] - arr[1][2] * arr[2][0]) + arr[0][2] * (arr[1][0] * arr[2][1] - arr[2][0] * arr[1][1])
    println(determinant)
}