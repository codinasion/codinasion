import org.junit.Assert.assertArrayEquals
import org.junit.Test

fun main() {
    arrayOf(1, 2, 0, 4, 3, 0, 5, 0)
        .printWithZeroesAtEnd()
}

/**
 * Extension function that moves all zeroes to the end of the
 * receiver array and prints the result to console.
 *
 * Example:
 * ```kotlin
 * arrayOf(1, 2, 0, 4, 3, 0, 5, 0).printWithZeroesAtEnd()
 * ```
 *
 * Output:
 * ```console
 * 1 2 4 3 5 0 0 0
 * ```
 */
private fun Array<Int>.printWithZeroesAtEnd(): Array<Int> =
    let(::moveAllZeroesToEndOfArray)
        .also {
            println(it.joinToString())
        }

/**
 * Function that moves all zeroes to the end of an array.
 * @return a new array comprising the elements of the input with all zeroes
 * shifted to the end.
 */
private fun moveAllZeroesToEndOfArray(input: Array<Int>): Array<Int> =
    input.fold(
        Pair(emptyList<Int>(), emptyList<Int>())
    ) { (nonZeroes, zeroes), i ->
        if (i != 0) Pair((nonZeroes + i), zeroes)
        else Pair(nonZeroes, (zeroes + 0))
    }.let { (nonZeroes, zeroes) ->
        (nonZeroes + zeroes).toTypedArray()
    }

class MoveAllZeroesToEndOfArrayTest {

    @Test
    fun testCase1() {
        // GIVEN
        val input = arrayOf(1, 2, 0, 4, 3, 0, 5, 0)
        val expected = arrayOf(1, 2, 4, 3, 5, 0, 0, 0)

        // WHEN
        val actual = input.let(::moveAllZeroesToEndOfArray)

        // THEN
        assertArrayEquals(expected, actual)
    }

    @Test
    fun testCase2() {
        // GIVEN
        val input = arrayOf(1, 2, 0, 0, 0, 3, 6)
        val expected = arrayOf(1, 2, 3, 6, 0, 0, 0)

        // WHEN
        val actual = input.let(::moveAllZeroesToEndOfArray)

        // THEN
        assertArrayEquals(expected, actual)
    }
}
