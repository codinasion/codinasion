open System

let main() =
    Console.Write("Enter value in feet: ")
    let feet = Console.ReadLine()
    let inches = float feet * 12.0
    Console.Write("{0} feet equals {1} inches\n", feet, inches)
main()