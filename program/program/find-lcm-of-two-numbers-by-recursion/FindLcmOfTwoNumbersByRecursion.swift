class LCMCalculator {
    func gcd(_ a: Int, _ b: Int) -> Int {
       
        if b == 0 {
            return a
        }
    
        return gcd(b, a % b)
    }

    func lcm(_ a: Int, _ b: Int) -> Int {
        
        return (a * b) / gcd(a, b)
    }
}

let calculator = LCMCalculator()
let num1 = 12
let num2 = 18
let result = calculator.lcm(num1, num2)
print("Output: \(result)")
