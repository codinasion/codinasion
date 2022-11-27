import kotlin.math.pow

fun main() {
    print("Enter Octal No. to Convert in Binary: ")
    val num = readln().toInt()
    println()
    print("Hexadecimal of Octal No: $num is: ")
    print(octalToBinary(num))
}

private fun checkOctalNumber(octalNum: String): Boolean {
    var isOctal = true

    for(charAtPos in octalNum) {
        if(!((charAtPos >= '0') && (charAtPos <= '7'))) {
            isOctal = false
            break
        }
    }
    return isOctal
}

private fun octalToBinary(nums: Int): String {
    val octalN = nums.toString()
    var binaryNum = ""

    if(checkOctalNumber(octalN)) {
        val octalNumString: String = octalN
        var i = 0
        while(i < octalNumString.length) {
            when(octalNumString[i]) {
                '0'  -> binaryNum += "000"
                '1'  -> binaryNum += "1"
                '2'  -> binaryNum += "010"
                '3'  -> binaryNum += "011"
                '4'  -> binaryNum += "100"
                '5'  -> binaryNum += "101"
                '6'  -> binaryNum += "110"
                '7'  -> binaryNum += "111"
            }
            i++
        }
    } else {
        println("$octalN is not an octal number")
    }

    return binaryNum
}