// gets input from the user
let input = readLine()

if let pounds = Double(input ?? ""){
    //converts pounds to kilograms
    let kilograms = pounds * 0.453592
    //displays the result in terminal
    print(kilograms)
}else{
    //handles invalid input
    print("Invalid Input. Please enter a number.")
}