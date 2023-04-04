import Swift
import Foundation

extension String {
    var isAlphanumeric: Bool {
        return !isEmpty && range(of: "[^a-zA-Z]", options: .regularExpression) == nil
    }
}

print("A".isAlphanumeric) //true
print("a".isAlphanumeric) //true
print("1".isAlphanumeric) //false
print("&".isAlphanumeric) //false
