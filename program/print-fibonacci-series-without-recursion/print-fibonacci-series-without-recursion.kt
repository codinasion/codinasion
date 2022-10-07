fun main(args: Array<String>) {
    val n = 5
    var t1 = 0
    var t2 = 1
    
    print("Fibonacci series: ")

    for (i in 1..n) {
        print("$t1 ")

        val sum = t1 + t2
        t1 = t2
        t2 = sum
    }
}