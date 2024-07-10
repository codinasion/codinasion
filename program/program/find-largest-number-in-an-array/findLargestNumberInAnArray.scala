object LargestElement {  
    def main(args: Array[String]) {  
        var IntArray = Array(1, 2, 3, 4, 5)
        var count:Int=0
        var large:Int=0
        
        large=IntArray(0)
        while(count<IntArray.size)
        {
            if(large<IntArray(count))
                large=IntArray(count)
            count=count+1
        }
        printf("Largest element is: %d\n",large)
    }
}  
