
object Main {
  def main(args: Array[String]) {
    val input =scala.io.StdIn.readLine("Enter a string: ")
    //example:
    //val input = "hello world"
    val output = input.split(" ")
    println(output.mkString("[", ", ", "]"))
  }
}
