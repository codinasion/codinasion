fun main() {
   val array = intArrayOf(1,2,3)
   var sum = 0
   for (element in array) {
       sum += (element * element)
   }
   println(sum)
}
