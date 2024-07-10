object HelloWorld {
  
  def gcd(a:Int,b:Int):Int={
    if(b==0){
      return a
    }
    else{
      gcd(b,a%b)
    }
  }
  
	 def main(args: Array[String]): Unit=
	 {
	   var a = scala.io.StdIn.readInt
	   var b = scala.io.StdIn.readInt
	   
	    if (a == 0){
	      println( b)
	    }
	    
      if (b == 0){
        println( a)
      }
        
      println(gcd(a,b))
	 }
}
