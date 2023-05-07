function SumOfN(n::Int)
    return (n*(n+1))/2
end
println("Enter the number: ")
n_s = readline()
n = parse(Int, n_s)
println("The sum of first ", n," natural numbers is ", SumOfN(n))