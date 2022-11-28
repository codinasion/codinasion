object convertStringToConstantcase {
    def printConstantcase(str: String): String = {

        //Array of string to store the words
        val strArray = str.split(" ")
        val strArrayLength = strArray.length
        //Variable to store the final string
        var finalStr = ""
        //Loop to iterate over the words
        for (i <- 0 until strArrayLength) {
            finalStr += strArray(i).upperCase
            // If it is not the last word of the string add underscore then proceed
            if (i != strArrayLength - 1) {
                finalStr += "_"
            }
        }
        return finalStr
  }
  def main(args: Array[String]): Unit = {
    val str = "Hello World"
    println(printConstantcase(str))
  }
  
}
