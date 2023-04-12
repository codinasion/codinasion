object printArray {
    def main(args:Array[String]):Unit={
        val nums: List[Int] = List(1, 2, 3, 4, 5); 
        for ( i <- 0 to (nums.length - 1)) {
         print(nums{i});
        }
    }
}
