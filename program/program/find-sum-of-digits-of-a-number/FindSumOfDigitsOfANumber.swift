func sum_of_digits(_ num: Int) -> Int {   //Declare a function to calculate the sum of digits of number
    var sum = 0
    var n = num

    while n>0 {
        sum += n%10
        n /= 10
    }
    return sum
}

print("Enter a positive number: ")      //Take input from the user
if let num = Int(readLine()!){

    let Digitsum = sum_of_digits(num)   //Call the function and print the result
    print("Sum of digits of number \(num) is \(Digitsum)")
}

else {                                  //Print error if the input is invalid
    print("Please enter a valid input!")
}