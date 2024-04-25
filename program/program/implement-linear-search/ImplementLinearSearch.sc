object LinearSearch {

  def search(list: List[Int], value: Int): Int = {
    list.zipWithIndex.find(_._1 == value).map(_._2).getOrElse(-1)
  }

  def main(args: Array[String]): Unit = {
    val list = List(1, 2, 3, 4, 5)
    val value = 4

    val index = search(list, value)

    if (index != -1) {
      println(s"Element $value found at index: $index")
    } else {
      println(s"Element $value not found in the list")
    }
  }
}
