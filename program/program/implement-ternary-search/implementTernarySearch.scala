object TernarySearch {
  def ternarySearch(array: Array[Int], value: Int): Int = {
    var left = 0
    var right = array.length - 1
    
    while (left <= right) {
      val partitionSize = (right - left) / 3
      val mid1 = left + partitionSize
      val mid2 = right - partitionSize
      
      if (array(mid1) == value) {
        return mid1
      }
      
      if (array(mid2) == value) {
        return mid2
      }
      
      if (value < array(mid1)) {
        right = mid1 - 1
      } else if (value > array(mid2)) {
        left = mid2 + 1
      } else {
        left = mid1 + 1
        right = mid2 - 1
      }
    }
    
    -1
  }

  def main(args: Array[String]): Unit = {
    val sortedArray = Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
    val valueToSearch = 7
    
    val result = ternarySearch(sortedArray, valueToSearch)
    
    if (result != -1) {
      println(s"Element found at index $result")
    } else {
      println("Element not found in the array")
    }
  }
}
