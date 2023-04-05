import Swift
import Foundation

extension String {
    var isAlphabet: Bool {
        return !isEmpty && range(of: "[^a-zA-Z]", options: .regularExpression) == nil
    }
}

print("A".isAlphabet) //true
print("a".isAlphabet) //true
print("1".isAlphabet) //false
print("&".isAlphabet) //false
