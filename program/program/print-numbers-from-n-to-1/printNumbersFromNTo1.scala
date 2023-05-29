// Write a Scala program to print numbers from n to 1

// Input  : 5
// Output : 5 4 3 2 1

object PrintNumbersFromNTo1{  
    def main(args:Array[String]){ 
       
        var num:Int = 5
        
        print("Enter number: ")
        num = scala.io.StdIn.readInt()

        var x:String=num
        
        while (x > 0) 
        {
           println(x + " ")
            x -= 1
        }
        
        println("Number is: "+result)
    }  
}

// Contributed by Technical Amanjeet
