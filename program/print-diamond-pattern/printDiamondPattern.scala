object printDiamondPattern {
    def diammondPatternIncrementByTwo(n: Int): Unit = {
        // print upper half of the diamond
        for (i <- 1 to n) {
            for (j <- 1 to n - i) print("  ")
            for (j <- 1 until 2 * i) print("* ")
            println()
        }
        // print lower half of the diamond
        for (i <- n - 1 to 1 by -1) {
            for (j <- 1 to n - i) print("  ")
            for (j <- 1 until 2 * i) print("* ")
            println()
        }
    }
    def main(args: Array[String]): Unit = {
    val n = 5
    diammondPatternIncrementByTwo(n)

    }
  
}

