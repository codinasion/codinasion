fun main() {
    print("Enter No. to Print Fibonacci: ")
    val num = readln().toInt()
    print("Fibonacci Series of $num is: ${fibonacciRecursion(num).asList()}")
}

private fun fibonacciRecursion(num: Int): IntArray {
    val arr = IntArray(num)
    fib(num, arr)
    return arr
}

private fun fib(num: Int, arr: IntArray): Int {
    if (num <= 1) {
        arr[0] = 0
        return 0
    }
    if (num == 2) {
        arr[1] = 1
        return 1
    }
    if (arr[num - 1] != 0) return arr[num - 1]
    arr[num - 1] = fib(num - 1, arr) + fib(num - 2, arr)
    return arr[num - 1]
}
