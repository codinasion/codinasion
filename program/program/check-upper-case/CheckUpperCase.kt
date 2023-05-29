import kotlin.math.PI
import java.util.Scanner

fun main(args: Array<String>) {
  val scanner = Scanner(System.`in`)

  //Input Character
  print("Enter a character : ")
  val char = scanner.next()[0]

  val upperCase = char.isUpperCase()
  if(upperCase){
      println("Upper Case")
  } else{
      println("Not Upper Case")
  }
}
