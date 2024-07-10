import org.junit.Assert.assertArrayEquals
import org.junit.Test

fun main() {
    arrayOf(12, 13, 1, 10, 34, 1)
        .printSmallestTwo()
}

/**
 * Extension function that prints the smallest two elements
 * in the receiver array.
 *
 * Example:
 * ```kotlin
 * arrayOf(12, 13, 1, 10, 34, 1).printSmallestTwo()
 * ```
 *
 * Output:
 * ```console
 * 1 1
 * ```
 */
private fun Array<Int>.printSmallestTwo() =
    let(::toSmallestTwoElements)
        .also {
            println(it.joinToString(" "))
        }

/**
 * Function to find the smallest two elements in an array.
 * @return a new array comprising the smallest two members of the input.
 */
private fun toSmallestTwoElements(input: Array<Int>): Array<Int> =
    input.fold(
        Array(2) { Int.MAX_VALUE }
    ) { acc, i ->
        when {
            i < acc[0] -> arrayOf(i, acc[0])
            i in acc[0]..acc[1] -> arrayOf(acc[0], i)
            else -> acc
        }
    }

class FindTheSmallestTwoElementsInAnArrayTest {

    @Test
    fun testCase1() {
        // GIVEN
        val input = arrayOf(12, 13, 1, 10, 34, 1)
        val expected = arrayOf(1, 1)

        // WHEN
        val actual = input.let(::toSmallestTwoElements)

        // THEN
        assertArrayEquals(expected, actual)
    }

    @Test
    fun testCase2() {
        // GIVEN
        val input = arrayOf(10, 5, 10)
        val expected = arrayOf(5, 10)

        // WHEN
        val actual = input.let(::toSmallestTwoElements)

        // THEN
        assertArrayEquals(expected, actual)
    }
}
