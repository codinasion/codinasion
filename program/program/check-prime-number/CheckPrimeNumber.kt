import kotlin.math.sqrt

fun main() {
    print("Enter No. to check Prime: ")
    val num = readln().toInt()
    if (checkPrime(num)) print("$num is Prime Number")
    else print("$num is Not a Prime Number")
}

private fun checkPrime(num: Int): Boolean {
    if (num <= 1) return false
    if (num == 2 || num == 3) return true
    if (num % 2 == 0 || num % 3 == 0) return false

    for (i in 5..sqrt(num.toDouble()).toInt() step 6) {
        if (num % i == 0 || num % (i + 2) == 0) return false
    }
    return true
}