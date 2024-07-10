function main()
    println("Enter the first number:")
    num1 = parse(Int, readline())
    println("Enter the second number:")
    num2 = parse(Int, readline())

    lcm_value = lcm(num1, num2)
    println("The LCM of $num1 and $num2 is $lcm_value")
end

function gcd(a, b)
    if b == 0
        return abs(a)  # Ensure GCD is always positive
    else
        return gcd(b, a % b)
    end
end

function lcm(a, b)
    return abs(a * b) ÷ gcd(a, b)  # Calculate LCM using the GCD
end

main()
