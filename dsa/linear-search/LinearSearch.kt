fun main() {
    print("Enter the Array to Search: ")
    val nums = readln()
    print("Enter Number to search in Array: ")
    val target = readln().toInt()
    val search = linearSearch(nums, target)
    if (search != -1) print("Index of Number:$target in Array is: $search")
    else print("$target not found in Array")

}

private fun linearSearch(nums: String, target: Int): Int {
    val list = mutableListOf<Int>()
    var str = ""
    nums.forEach {
        if (it == ' ') {
            list.add(str.toInt())
            str = ""
        } else str += it
    }
    if (str != "") list.add(str.toInt())
    return search(list.toIntArray(), target)
}

private fun search(nums: IntArray, target: Int): Int {
    for (i in nums.indices) {
        if (nums[i] == target) return i
    }
    return -1
}