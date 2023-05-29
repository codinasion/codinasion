import kotlin.math.pow

fun main() {
    print("Enter the numbers:")
    val nums = readln()
    print("Sum of Cubes of Number: ${sumOfCubes(nums)}")
}

private fun sumOfCubes(nums: String): Int {
    val list = mutableListOf<Int>()
    var str = ""
    nums.forEach {
        if (it == ' ') {
            list.add(str.toInt())
            str = ""
        } else str += it
    }
    if (str != "") list.add(str.toInt())
    return sumRecursion(0, list)
}

private fun sumRecursion(index: Int, nums: MutableList<Int>): Int {
    if (index == nums.lastIndex) return nums[index].toDouble().pow(3).toInt()

    return nums[index].toDouble().pow(3).toInt() + sumRecursion(index + 1, nums)
}