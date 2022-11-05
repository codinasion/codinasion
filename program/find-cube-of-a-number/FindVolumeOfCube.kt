import java.util.Scanner

fun main(){
  print("Enter number : ")
 
  // Creates an instance which takes input from standard input (keyboard)
    val reader = Scanner(System.`in`)

    // nextInt() reads the next integer from the keyboard
    var num:Int = reader.nextInt()

  val cube = num * num * num

  println("Cube  = ${cube}")
}