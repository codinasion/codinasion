import java.util.Scanner

// contributed by Nudennie White / Tc2r1 www.github.com/tc2r1
fun main() {
    val scanner = Scanner(System.`in`)

    print("Enter First Positive Whole Number: ")
    val number1 = scanner.nextInt()

    print("Enter Second Positive Whole Number: ")
    val number2 = scanner.nextInt()

    var gcd = gcdBySteinsAlgorithm(number1, number2)
    println("Stein's Algorithm says it is: $gcd")

    gcd = gcdByEuclidsAlgorithm(number1, number2)
    println("Euclid's Algorithm says it is: $gcd")
}

fun gcdByEuclidsAlgorithm(n1: Int, n2: Int): Int {
    return if (n2 == 0) {
        n1
    } else gcdByEuclidsAlgorithm(n2, n1 % n2)
}

fun gcdBySteinsAlgorithm(number1: Int, number2: Int): Int {
    var n1 = number1
    var n2 = number2
    if (n1 == 0) {
        return n2
    }
    if (n2 == 0) {
        return n1
    }
    var n = 0
    while (n1 or n2 and 1 == 0) {
        n1 = n1 shr 1
        n2 = n2 shr 1
        n++
    }
    while (n1 and 1 == 0) {
        n1 = n1 shr 1
    }
    do {
        while (n2 and 1 == 0) {
            n2 = n2 shr 1
        }
        if (n1 > n2) {
            val temp = n1
            n1 = n2
            n2 = temp
        }
        n2 -= n1
    } while (n2 != 0)
    return n1 shl n
}