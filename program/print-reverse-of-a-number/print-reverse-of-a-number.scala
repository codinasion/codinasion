object HelloWorld {
	def main(args: Array[String]): Unit = {
	 var num = scala.io.StdIn.readInt();
	 
	 if (num > 0) println(num.toString.reverse.toInt )
	 else println(-1 * ((num * -1).toString.reverse.toInt))
	}
}
