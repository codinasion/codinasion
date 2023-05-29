import java.util.Scanner

fun main() {
    print("Enter String : ")
    println()
    var min = readLine()

    println("Camel Case: " + ConvertStringToPathcase(min!!.split(" ")))

}

private fun ConvertStringToPathcase(args: List<String>): String {
    val buffer = StringBuffer()
    for((index,day) in args.withIndex()){
        //println("$index :$day")
        if(index == 0) {
            buffer.append(day);
        } else {
            buffer.append("/").append(day)
        }
    }

    return buffer.toString()
}