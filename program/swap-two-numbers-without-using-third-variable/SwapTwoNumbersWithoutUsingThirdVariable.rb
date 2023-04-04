def swapTwoNumbersWithoutUsingThirdVariable num1, num2
    num1 = num1 + num2
    num2 = num1 - num2
    num1 = num1 - num2
    [num1, num2].join(" ")
end

puts swapTwoNumbersWithoutUsingThirdVariable 10, 20