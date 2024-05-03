object JumpSearch {

  def jumpSearch(arr: Array[Int], x: Int): Int = {
    val n = arr.length
    val jump = Math.sqrt(n.toDouble).toInt // Calculate optimal jump size

    var prev = 0

    // Find the block where x should be present
    while (arr(Math.min(n - 1, prev)) < x) {
      prev += jump
    }

    // Do a linear search in the current block
    var curr = Math.max(0, prev - jump)
    while (curr < Math.min(n, prev)) {
      if (arr(curr) == x) {
        return curr
      }
      curr += 1
    }

    // Not found
    return -1
  }

  def main(args: Array[String]): Unit = {
    val list = Array(1, 2, 3, 4, 5)
    val value = 4
    val index = jumpSearch(list, value)

    if (index != -1) {
      println(s"Element $value found at index: $index")
    } else {
      println(s"Element $value not found in the list")
    }
  }
}
