import java.util.*
import kotlin.math.pow

fun decToBinary(n: Int) {
        var num = n
        //Array to store binary number
        val binaryNum = IntArray(1000)

        // counter for binary array 
        var i = 0
        while (num > 0) {
            // storing remainder in binary array 
            binaryNum[i] = num % 2
            num /= 2
            i++
        }

        // printing binary array in reverse order 
        for (j in i - 1 downTo 0) print(binaryNum[j])
    }

fun main() {
    val read = Scanner(System.`in`)
    var input = read.nextInt()
    decToBinary(input)
}

