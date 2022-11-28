import java.util.*

// Write a Kotlin program to print numbers from n to 1

// Input  : 5
// Output : 5 4 3 2 1

fun main(args: Array<String>) {

    val reader = Scanner(System.`in`)

    print("Enter a number: ")
    val num = reader.nextInt()

    var i = num

    while ( i > 0 )
    {
      print(i.toString() + " ")

      i = i - 1
    } 
}

// Contributed by Technical Amanjeet 