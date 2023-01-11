fun main() {
    print("Input : ")
    println()
    var input = readLine()

    println("Prime number between $input are : " + PrintAllPrimeNumbersBetweenTwoNumbers(input!!.split(" ")))

}

private fun PrintAllPrimeNumbersBetweenTwoNumbers(nums: List<String>): String {
    var low = nums.get(0).toInt()
    val high = nums.get(1).toInt()
    val buffer = StringBuffer()

    while (low < high) {
        if (checkPrimeNumber(low))
            buffer.append(low.toString() + " ")
        ++low
    }

    return buffer.toString()
}

fun checkPrimeNumber(num: Int): Boolean {
    var flag = true

    for (i in 2..num / 2) {

        if (num % i == 0) {
            flag = false
            break
        }
    }

    return flag
}