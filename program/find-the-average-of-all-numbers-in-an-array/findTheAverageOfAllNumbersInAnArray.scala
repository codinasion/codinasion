object arrayAverage {
    def main(args:Array[String]):Unit={
        val nums: List[Int] = List(1, 2, 3, 4, 5); 
        var total = 0.0;      
        for ( i <- 0 to (nums.length - 1)) {
         total += nums(i);
        }
        val result = 
        println("Array Average : "+total/nums.length);
    }
}
