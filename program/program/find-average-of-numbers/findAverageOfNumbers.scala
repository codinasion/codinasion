object HelloWorld {
 	def main(args: Array[String]): Unit = {
 	  var nums = Array(1, 2, 3, 4, 5);
 	  
 	  //Sum using for loop
    var total = 0.0;      
    for ( i <- 0 to (nums.length - 1)) {
      total += nums(i);
    }
    println(s"\nAverage value of the array elements is: ${total/nums.length}");
 	}
 }
