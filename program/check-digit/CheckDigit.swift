import Swift
import Foundation

extension String {
   var isNumeric: Bool {
       return !isEmpty && range(of: "[^0-9]", options: .regularExpression) == nil
   }
}

print("1".isNumeric) //true
print("9".isNumeric) //true
print("A".isNumeric) //false
print("a".isNumeric) //false
print("&".isNumeric) //false
