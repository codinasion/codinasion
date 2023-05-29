
object Main extends App 
{
  def seconds[T](weeks: T)(implicit ev: Numeric[T]) =
    ev.times(weeks * 604800)

  val weeks = 5

  println("Weaks : " + weaks)

  println("\Seconds : " + seconds(weaks))

}


