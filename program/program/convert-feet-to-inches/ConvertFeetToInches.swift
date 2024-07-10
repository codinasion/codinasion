//Program to convert feet to inches.
while (true) {    
    print("Enter length in feet: ")
if let feet = Double(readLine()!) {       //checks if the input is a valid number or not. 
    let inches = feet * 12.0              // 1 feet = 12 inches
    print("\(feet) feet is equal to \(inches) inches.")
    break
}
else {                                    //If the input is not valid, it will ask to input again.
    print("Please enter a valid number.")
}
}