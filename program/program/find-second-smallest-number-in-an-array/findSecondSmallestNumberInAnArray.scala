object Scala_Array {

  def main(args: Array[String]): Unit = {
    val arr = Array(1, 2, 3, 4, 5);
    println("Original array :")
    for (x <- arr) {
      print(s"${x}, ")
    }
    var first_element, second_element, arr_size = arr.length;
    if (arr_size < 2) {
      println("\nArray size less than two.");
    } else {
      first_element = Int.MaxValue
      second_element = Int.MaxValue

      for (i <- 0 to arr_size - 1) {
        if (arr(i) < first_element) {
          second_element = first_element;
          first_element = arr(i);
        }

        else if (arr(i) < second_element && arr(i) != first_element)
          second_element = arr(i);
      }
      if (second_element == Integer.MAX_VALUE)
        println("\nNo second smallest element.");
      else
        println(
          s"\nThe second smallest element is : ${second_element}"
        );
    }
  }
}
