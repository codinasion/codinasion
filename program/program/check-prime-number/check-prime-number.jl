function checkPrime(num)    
    isPrime = true
        for i in 2:convert(Int64, round(num/2, digits = 0))
            if num % i == 0
                isPrime = false
                break
            end
        end
    return isPrime
end

print("Enter a number: ")
num = parse(Int, readline(stdin))
isPrime = checkPrime(num)
if num == 1
    println("1 is neither prime nor composite.")
elseif isPrime == true
    println("Entered number is prime")
else
    println("Entered number is not prime")
end
