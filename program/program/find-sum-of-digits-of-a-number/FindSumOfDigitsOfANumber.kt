fun main() {
    sumOfNumberDigits(123)
}

fun sumOfNumberDigits(n: Int){
    var x = n;
    var sum = 0
    while (x > 0) {
        var y = x % 10
        sum += y
        x /= 10
    }
    println(sum)
}
