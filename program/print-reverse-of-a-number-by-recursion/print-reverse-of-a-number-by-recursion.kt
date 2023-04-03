import java.util.Scanner

fun reverseNumber(num: Int): Int {
	return if (num < 10) {
        num
    } else {
        val lastDigit = num % 10
        val remainingNum = num / 10
        val reversedRemainingNum = reverseNumber(remainingNum)
        (lastDigit * Math.pow(10.0, (remainingNum.toString().length).toDouble()).toInt()) + reversedRemainingNum
    }
}

fun main() {
    val reader = Scanner(System.`in`)
    print("Enter a number: ")

    var number:Int = reader.nextInt()

    val reversedNumber = reverseNumber(number)
    println("The reverse of $number is $reversedNumber")
}