import java.util.Scanner

fun main() {
    print("Enter String : ")
    println()
    var min = readLine()

    println("Sentence Case: " + ConvertStringToSentencecase(min!!.split(" ")))

}

private fun ConvertStringToSentencecase(args: List<String>): String {
    val buffer = StringBuffer()
    for((index,case) in args.withIndex()){
        if(index == 0) {
            buffer.append(case.get(0).uppercase()).append(case.subSequence(1,case.length))
        } else {
            buffer.append(" ").append(case)
        }
    }

    return buffer.toString()
}