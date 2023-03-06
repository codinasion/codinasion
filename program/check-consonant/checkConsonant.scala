object HelloWorld {
 	def main(args: Array[String]): Unit = {
 	  val c = scala.io.StdIn.readChar();
 	  
      if(c == 'A' 
      || c == 'E' 
      || c == 'I' 
      || c == 'O' 
      || c == 'U' 
      || c == 'a' 
      || c == 'e' 
      || c == 'i' 
      || c == 'o' 
      || c == 'u') {
         println("Not a Consonant");
      } else {
        println("Is a Consonant")
      }
 	}
 }
