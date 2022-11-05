def fact(n)
    return 1 if n==0

    return n*fact(n-1)
end
print "Enter a number : "
num = gets.chomp.to_i
print "Factorial of #{num} : #{fact(num)}"