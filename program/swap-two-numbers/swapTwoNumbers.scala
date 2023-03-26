object Main extends App {
    var a = 10
    var b = 20
    
    println("Before Swapping a = " +a+ " b =" +b)

    a = a + b
    b = a - b
    a = a - b

    println("After Swapping a = " +a+ " b =" +b)
}
