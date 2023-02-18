func inchesToFeet(inches: Int) -> Int {
    let feet = inches / 12
    return feet
}

print("Input: ", terminator: "")
let inches = Int(readLine()!)!
let feet = inchesToFeet(inches: inches)
print("Output: \(feet)")
