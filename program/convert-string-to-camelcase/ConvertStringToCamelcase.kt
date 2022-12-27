import java.util.Scanner

fun main() {
    print("Enter String : ")
    println()
    var min = readLine()

    println("Camel Case: " + CamelCase(min!!.split(" ")))

}

private fun CamelCase(args: List<String>): String {
    val buffer = StringBuffer()
    for((index,day) in args.withIndex()){
        //println("$index :$day")
        if(index == 0) {
            buffer.append(day);
        } else {
            buffer.append(day.get(0).uppercase()).append(day.subSequence(1,day.length))
        }
    }

    return buffer.toString()
}