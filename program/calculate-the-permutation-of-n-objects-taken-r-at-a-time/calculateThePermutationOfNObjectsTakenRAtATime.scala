def factorial(num: Integer): Integer = {
    if (num == 0) return 1
        return num * factorial(num - 1)
    }

def permutations(total: Integer, sample: Integer): Integer = {
    if(total > sample) {
        return factorial(total)/factorial(total-sample)
    } else {
        throw new Exception(s"ERROR: supplied total > sample; permutations(total=${total}, sample=${sample})")
    }
}

println(permutations(5, 2))
