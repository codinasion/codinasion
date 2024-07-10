object FINDLCM extends App{
    def gcd(a: Int, b: Int): Int = if (b == 0) a else gcd(b, a % b)

    def lcm(a: Int, b: Int): Int = if (a == 0 || b == 0) 0 else math.abs(a * b) / gcd(a, b)

    println(s"LCM of 12 and 18 is: ${lcm(12, 18)}")
}
