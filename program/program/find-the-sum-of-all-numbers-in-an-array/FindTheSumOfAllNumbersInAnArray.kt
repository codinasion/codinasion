// #1 - using built-in function
fun findTheSumOfAllNumbersInAnArray1(numbers: Array<Int>): Int = numbers.sum()

// #2 - using looping
fun findTheSumOfAllNumbersInAnArray2(numbers: Array<Int>): Int {
	var total = 0
	
	for (number in numbers) {
		total += number
	}
	
	return total
}

fun main() {
	val inputs = arrayOf<Int>(1, 2, 3, 4, 5)
	// println(findTheSumOfAllNumbersInAnArray1(inputs))
	println(findTheSumOfAllNumbersInAnArray2(inputs))
}
