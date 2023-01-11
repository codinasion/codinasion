import java.util.Scanner

fun main() {
    print("Enter String : ")
    println()
    var min = readLine()

    println("Pascal Case: " + ConvertStringToPascalcase(min!!.split(" ")))

}

private fun ConvertStringToPascalcase(args: List<String>): String {
    val buffer = StringBuffer()
    for((index,day) in args.withIndex()){
        if(index == 0) {
            buffer.append(day.get(0).uppercase()).append(day.subSequence(1,day.length))
        } else {
            buffer.append(" ").append(day.get(0).uppercase()).append(day.subSequence(1,day.length))
        }
    }

    return buffer.toString()
}
