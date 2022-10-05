import java.util.Scanner

fun main(){
  print("Enter number of weeks : ")
 
  // Creates an instance which takes input from standard input (keyboard)
    val reader = Scanner(System.`in`)

    // nextInt() reads the next integer from the keyboard
    var num_of_weaks:Int = reader.nextInt()

  val total_minutes_in_weaks = num_of_weaks * 10080

  println("Total Minutes in given weaks is ${total_minutes_in_weaks}")
}