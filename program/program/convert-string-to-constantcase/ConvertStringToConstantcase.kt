import java.util.Scanner

fun main() {
    print("Enter String : ")
    println()
    var min = readLine()

    println("Constant Case: " + ConvertStringToConstantcase(min!!.split(" ")))

}

private fun ConvertStringToConstantcase(args: List<String>): String {
    val buffer = StringBuffer()
    for((index,day) in args.withIndex()){
        //println("$index :$day")
        if(index == 0) {
            buffer.append(day.uppercase());
        } else {
            buffer.append("_").append(day.uppercase())
        }
    }

    return buffer.toString()
}