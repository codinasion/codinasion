object Main {
    def main(args: Array[String]) {
        print("Enter a string: ")
        val input = Console.in.readLine()
        val output = input.split(" ")
        println(output.mkString("[", ", ", "]"))
    }
}
