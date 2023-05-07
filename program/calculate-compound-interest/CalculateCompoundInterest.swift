import Swift
import Foundation

var principal = 1000.0
var rate = 10.0
var time = 5.0

var interest = principal * pow(1 + rate/100.0, time)
print(interest)
