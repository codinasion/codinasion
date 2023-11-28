import Foundation

func hexToDecimal(_ hex: String) -> Int {
    let hexMap: [Character: Int] = ["0": 0, "1": 1, "2": 2, "3": 3, "4": 4, "5": 5, "6": 6, "7": 7, "8": 8, "9": 9,
                                    "A": 10, "B": 11, "C": 12, "D": 13, "E": 14, "F": 15,
                                    "a": 10, "b": 11, "c": 12, "d": 13, "e": 14, "f": 15]
    return hex.uppercased().reversed().enumerated().reduce(0) {
        $0 + (hexMap[$1.element]! * Int(pow(16.0, Double($1.offset))))
    }
}


print("Enter a hexadecimal number: ")
if let inputHex = readLine() {
    let decimalValue = hexToDecimal(inputHex)
    print("Hexadecimal: \(inputHex), Decimal: \(decimalValue)")
} else {
    print("Invalid input or no input was read.")
}