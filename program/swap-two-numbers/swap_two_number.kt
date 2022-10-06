fun main(args: Array<String>) 
{ 
    // Get the input from the user
    var item = readLine()!!.trim()

    // Assign it to the variables
    var first = item[0]
    var second = item[1]

    // Swap using the temperory variable
    var temp = first
    first = second
    second = temp

    // Output the results
    println("$first $second")
}
