function gcd_recursive(a, b)
   
    if b == 0
        return a
    else
      
        return gcd_recursive(b, a % b)
    end
end


num1 = 12
num2 = 18


println("GCD of $num1 and $num2 is: ", gcd_recursive(num1, num2))
