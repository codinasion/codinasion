def factorial(n)
  (1..n).reduce(1, :*)
end

def permutation(n, r)
  factorial(n) / factorial(n - r)
end

# Example usage
n = 5
r = 3
puts "Permutation of #{n} objects taken #{r} at a time is: #{permutation(n, r)}"
