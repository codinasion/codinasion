object Main extends App {

    // Declaring as var (i.e. mutable variable)
    var a = 10
    var b = 20

    // Values before swap
    println("a: " + a)
    println("b: " + b)

    // Swap
    a = a + b
    b = a - b
    a = a - b

    // Values after swap
    println("a: " + a)
    println("b: " + b)

}