object Main extends App {
  def volumeOfACuboid[T](wid: T, len: T, hei: T)(implicit ev: Numeric[T]) =
    ev.times(wid, ev.times(len, hei))

  val length = 2
  val width = 3
  val height = 4

  println("Length : " + length)
  println("Width  : " + width)
  println("Height : " + height)

  println("\nVolume : " + volumeOfACuboid(length, width, height))
}
