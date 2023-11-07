object FloydsTraingle {
    def main(args: Array[String]): Unit = {
        //Ask the user for the number of rows
        println("Enter the number of rows for Floyd’s Traingle:")
        val numRows = scala.io.StdIn.readInt()
        var num = 1
        for (i <- 1 to numRows) {
            for (j <- 1 to i) {
                print(s"$num ")
                num += 1
            }
            println()
        }
    }
}