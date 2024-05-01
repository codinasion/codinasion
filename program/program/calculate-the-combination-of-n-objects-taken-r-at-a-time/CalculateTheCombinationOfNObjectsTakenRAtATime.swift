class CombinationCalculator {
    func factorial(_ n: Int) -> Int {
        if n <= 1 {
            return 1
        } else {
            return n * factorial(n - 1)
        }
    }
    
    func combination(n: Int, r: Int) -> Int {
        if r > n || n < 0 || r < 0 {
            return 0
        }
        return factorial(n) / (factorial(r) * factorial(n - r))
    }
}


let combinationCalculator = CombinationCalculator()
let n = 5
let r = 2
let result = combinationCalculator.combination(n: n, r: r)
print("Combination of \(n) objects taken \(r) at a time: \(result)")
