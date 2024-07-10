object OctalToHexadecimalConverter {

  def main(args: Array[String]): Unit = {
  
    val octalNumber = "12"

   
    val decimalNumber = octalToDecimal(octalNumber)

   
    val hexadecimalNumber = decimalToHexadecimal(decimalNumber)

   
    println(s"The hexadecimal equivalent of octal number $octalNumber is: $hexadecimalNumber")
  }

  
  def octalToDecimal(octal: String): Int = {
    Integer.parseInt(octal, 8)
  }

  
  def decimalToHexadecimal(decimal: Int): String = {
    Integer.toHexString(decimal).toUpperCase
  }
}
