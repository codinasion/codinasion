package com.includehelp.basic

import java.util.*


fun main(args: Array<String>) {
    
    val scanner = Scanner(System.`in`)

    //Input Character
    print("Enter Character : ")
    val char = scanner.next()[0]

    when {
        char.isDigit() -> 
        char.isLetter() ->
        else -> println("Special Character")
    }
}
