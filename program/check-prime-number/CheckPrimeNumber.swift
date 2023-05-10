import Swift
import Foundation

func isPrime(_ n: Int) -> Bool {
    guard n >= 2     else { return false }
    guard n != 2     else { return true  }
    guard n % 2 != 0 else { return false }
    return !stride(from: 3, through: Int(sqrt(Double(n))), by: 2).contains { n % $0 == 0 }
}

var number1 = 5
print("5 is a prime number: " , isPrime(number1))

var number2 = 9
print("9 is a prime number: " , isPrime(number2))
