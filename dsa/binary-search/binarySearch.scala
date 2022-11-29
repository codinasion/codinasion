object binarySearch {
    def search(arr: Array[Int], target: Int): Int = {
        var left = 0
        var right = arr.length - 1

        while (left <= right) {
            val mid = start + (right - start) / 2
            if (arr(mid) == target) return mid
            else if (arr(mid) < target) left = mid + 1
            else right = mid - 1
            
        }
        return -1
    }

    def main(args: Array[String]): Unit = {
        val arr = Array(1, 2, 3, 4, 5, 6, 7, 8, 9)
        val target = 5
        val result = search(arr, x)
        if (result == -1) println("Target not found")
        else println(s"Target found at index  $result" )
        
    }
}
