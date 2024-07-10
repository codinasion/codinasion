import java.util.Scanner

fun main() {
    print("Enter String : ")
    println()
    var min = readLine()

    println("Vowel Case: " + ConvertStringToVowelcase(min!!.split(" ")))

}

private fun ConvertStringToVowelcase(args: List<String>): String {
    val buffer = StringBuffer()
    for((index1,case) in args.withIndex()){
        if(index1 != 0) {
            buffer.append(" ")
        }
        for((index2,ch) in case.withIndex()){
            if(ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u'){
                buffer.append(ch.uppercase())
            }else{
                buffer.append(ch.lowercase())
            }
        }
    }

    return buffer.toString()
}