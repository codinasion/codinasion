object sumOfDigits{
def calc (num:Int): Int = if(num == 0) 0 else (num % 10) + calc(num/10)
def main(args:Array[String]) {
println(calc(123))
}
}
