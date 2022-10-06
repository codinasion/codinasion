import java.util.*
fun main()
{   
    print("Enter number of Days : ")
    var num_of_days = readLine()

    val minutes = num_of_days!!.toInt() * 1440
    
    print("Total minutes : " + minutes.toString())
}
