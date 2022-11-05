import java.util.Scanner

// Write a Kotlin program to convert weeks to seconds

// 1 week = 7 days = 168 hours = 10080 minutes = 604800 seconds

// Input  : 5
// Output : 3024000

fun main(){
  print("Enter number of weeks : ")
 
  // Creates an instance which takes input from standard input (keyboard)
    val reader = Scanner(System.`in`)

    // nextInt() reads the next integer from the keyboard
    var num_of_weaks:Int = reader.nextInt()

  val total_seconds_in_weaks = num_of_weaks * 604800

  println("Total Minutes in given weaks is ${total_seconds_in_weaks}")
}

// contributed by technical amanjeet 
