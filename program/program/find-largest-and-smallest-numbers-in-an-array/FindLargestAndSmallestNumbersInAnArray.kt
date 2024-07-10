fun findLargestAndSmallestNumbers(numbers: Array<Int>): String {
	numbers.sort()
	val largestNumber = numbers[numbers.size - 1]
	val smallestNumber = numbers[0]
	return "${largestNumber}, ${smallestNumber}"
}

fun main() {
	val inputs = arrayOf<Int>(1, 2, 3, 4, 5)
	println(findLargestAndSmallestNumbers(inputs))
}
