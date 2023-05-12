fun String.reverseCaseOfString(): String {
    val inputCharArr = toCharArray() // Converting the input to char array
    var output = ""
    for (i in inputCharArr.indices) {
        output += if (inputCharArr[i].isUpperCase()) { // Checking the character is in uppercase or not
            inputCharArr[i].lowercaseChar() // Converting the char to lower case
        } else {
            inputCharArr[i].uppercaseChar() // Converting the char to upper case
        }
    }
    return output
}
