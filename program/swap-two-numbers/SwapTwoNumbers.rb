def swapTwoNumbers num1, num2
    temp = num2
    num2 = num1
    num1 = temp
    puts [num1, num2].join(" ")
end

puts swapTwoNumbers 10, 20