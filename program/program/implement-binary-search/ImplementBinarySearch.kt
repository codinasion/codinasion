fun main() {
    println(binarySearch(intArrayOf(1, 2, 3, 4, 5),4))
}

/**
* A search algorithm that finds the index of a target value within a sorted array.
* Running time complexity: O(log n)
* 
* list = [1,2,3,4,5]
* value = 4
* Output : 3
* 
 */

fun binarySearch(A: IntArray, target: Int): Int {
    if(A.size == 0) return -1;

    var low = 0
    var high = A.size - 1

    while(low <= high) {
        val mid = low + (high - low) / 2

        if(A[mid] == target) {
            return mid;
        } else if(A[mid] < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    return -1;
}