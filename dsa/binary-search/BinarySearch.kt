fun main() {
    print("Enter Sorted Array to Search: ")
    val nums = readln()
    print("Enter the No. to Search in Array: ")
    val target = readln().toInt()
    val pos = search(nums, target)
    if (pos == -1) print("$target Not Found")
    else print("$target is in $pos position")
}

private fun search(nums: String, target: Int): Int {
    val num = nums.split(" ").map {
        it.toInt()
    }.toIntArray()
    return binarySearch(num, target)
}

private fun binarySearch(nums: IntArray, target: Int): Int {
    var start = 0
    var end = nums.lastIndex
    var mid: Int
    while (start <= end) {
        mid = (start + end) / 2
        if (nums[mid] == target) return mid
        if (target > nums[mid]) {
            start = mid + 1
        } else {
            end = mid - 1
        }
    }
    return -1
}