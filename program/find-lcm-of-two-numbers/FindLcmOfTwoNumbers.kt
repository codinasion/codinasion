import java.util.Scanner

fun main(args: Array<String>) {
  val scanner = Scanner(System.`in`)
  val input1 = scanner.nextInt();
  val input2 = scanner.nextInt();
  var myResult: Int

   myResult = if (input1 > input2) input1 else input2

   while (true) {
      if (myResult % input1 == 0 && myResult % input2 == 0) {
         println("The LCM is $myResult.")
         break
      }
      ++myResult
   }
}
