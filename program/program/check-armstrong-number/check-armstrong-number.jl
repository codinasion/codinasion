function isArmstrong(x)
    # If the number is less than 0, then it is not a armstrong number.
    if x < 0
        return false
    elseif x == 0
        return "true"
    else
        # Finding the total number of digits in the number
        length = Int(floor(log10(x) + 1))
        result = 0
        temp = x
        for i in 1:length
            val = temp % 10
            # Finding each digit raised to the power total digit and add it to the total sum
            result = result + Int(trunc(val))^length
            temp = temp / 10
        end
        return x == result ? true : false
    end
end

num = 153
if(isArmstrong(num))
 println("Armstrong Number")
else
 println("Not an Armstrong Number")
end
