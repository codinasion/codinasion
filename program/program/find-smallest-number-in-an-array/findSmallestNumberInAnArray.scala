object Scala_Array {

  def main(args: Array[String]): Unit = {
    val arr = Array(1, 2, 3, 4, 5);
    println("Original array :")
    for (x <- arr) {
      print(s"${x}, ")
    }
    var first_element, arr_size = arr.length;
      first_element = Int.MaxValue

      for (i <- 0 to arr_size - 1) {
        if (arr(i) < first_element) {
          first_element = arr(i);
        }

      }
        println(
          s"\nThe smallest element is : ${first_element}"
        );
  }
}
