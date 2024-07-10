function find_sum_of_gp_series(a, r, n)
    if r == 1
        return a * n
    else
        return a * (1 - r^n) / (1 - r)
    end
end

# Example usage
a = 1     # First term
r = 2     # Common ratio
n = 5     # Number of terms

sum = find_sum_of_gp_series(a, r, n)
println("Sum of geometric series: ", sum)
