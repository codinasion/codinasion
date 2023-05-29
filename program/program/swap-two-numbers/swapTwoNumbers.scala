object Main extends App {
    var a = scala.io.StdIn.readInt()
    var b = scala.io.StdIn.readInt()
    
    println("Before Swapping a = " +a+ " b =" +b)

    a = a + b
    b = a - b
    a = a - b

    println("After Swapping a = " +a+ " b =" +b)
}
