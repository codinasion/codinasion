fun findGCD(a: Int, b: Int): Int {
    // Base case: If b is 0, the GCD is a
    if (b == 0) {
        return a
    }

    
    return findGCD(b, a % b)
}

fun main() {
    val num1 = 48
    val num2 = 18
    val gcd = findGCD(num1, num2)
    
    println("GCD of $num1 and $num2 is $gcd")
}
