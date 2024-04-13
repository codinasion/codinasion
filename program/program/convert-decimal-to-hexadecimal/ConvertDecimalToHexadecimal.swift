func decimalToHexadecimal(_ decimal: Int) -> String {
    let hexDigits = "0123456789ABCDEF"
    var hexString = ""
    var number = decimal
    
    while number > 0 {
        let remainder = number % 16
        if let hexDigit = hexDigits.character(at: remainder) {
            hexString = String(hexDigit) + hexString
        }
        number /= 16
    }
    
    return hexString.isEmpty ? "0" : hexString
}

extension String {
    func character(at n: Int) -> Character? {
        return Array(self)[safe: n]
    }
}

extension Array {
    subscript(safe index: Int) -> Element? {
        return indices.contains(index) ? self[index] : nil
    }
}

// Example usage
let decimalNumber = 255
let hexadecimalNumber = decimalToHexadecimal(decimalNumber)
print("Decimal: \(decimalNumber), Hexadecimal: \(hexadecimalNumber)"
