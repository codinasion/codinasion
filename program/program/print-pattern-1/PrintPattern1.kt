/*
Program to print pyramid pattern

Input  : 5
Output :
1
1 2 
1 2 3
1 2 3 4
1 2 3 4 5

*/

fun main(args : Array<String>){

    var n = readLine()!!.toInt()

    for(i in 1..n) {
        for(j in 1..i) {
            print(j)
            print(" ")
        }
        println()
    }
}