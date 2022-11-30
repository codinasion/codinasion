object binarySearch {
    def search(arr: Arrays[Int], target: Int): Int = {
        var left = 0
        var right = arr.length - 1

        while(left<=right) {
            val mid = left + (right - left) / 2
            if(arr(mid) == target) return mid
            else if(arr(mid) < target) left = mid + 1
            else right = mid - 1
        }
        -1
    }
    def main(args: Array[String]): Unit = {
        var arr = Arrays(10, 20, 30, 40, 50, 60, 70, 80, 90, 100)
        var target = 5
        var result = search(arr, target)
        if(result == -1) println("Element not found")
        else println("Element found at index " + result)
    }
}