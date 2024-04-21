class HexadecimalToOctalConverter {
    func hexToDecimal(_ hex: String) -> Int {
        let decimal = Int(hex, radix: 16) ?? 0
        return decimal
    }
    
    func decimalToOctal(_ decimal: Int) -> String {
        var decimalNumber = decimal
        var octalNumber = ""
        
        while decimalNumber != 0 {
            let remainder = decimalNumber % 8
            octalNumber = String(remainder) + octalNumber
            decimalNumber /= 8
        }
        
        return octalNumber
    }
    
    func hexToOctal(_ hex: String) -> String {
        let decimal = hexToDecimal(hex)
        let octal = decimalToOctal(decimal)
        return octal
    }
}


let converter = HexadecimalToOctalConverter()
let hexInput = "A"
let octalOutput = converter.hexToOctal(hexInput)
print("Output: \(octalOutput)") // Output: 12
