/**
Program to find the sum of n-terms in an AP

The input to the program are a,n,d
a - first term
n - number of terms
d - common difference

Input : 2 5 3
Output for Sum of AP Series : 40

*/

fun main() {
    print("Input : ")
    println()
    var nums = readLine()

    println("Output for Sum of AP Series : " + FindSumOfApSeries(nums!!.split(" ")))

}

private fun FindSumOfApSeries(args: List<String>): Int {
    var a: Int = args[0].toInt() 
    var n: Int = args[1].toInt() 
    var d: Int = args[2].toInt() 
    var sum = ( n * (2*a + (n-1)*d) ) / 2

    return sum
}