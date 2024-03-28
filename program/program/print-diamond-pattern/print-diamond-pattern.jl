function print_diamond(n)
    # Upper half of the diamond
    for i in 1:n
        println(" "^(n-i) * "*"^(2*i-1))
    end
    
    # Lower half of the diamond (excluding the middle row if n is odd)
    for i in (n-1):-1:1
        println(" "^(n-i) * "*"^(2*i-1))
    end
end

# Test with n = 5
print_diamond(5)
