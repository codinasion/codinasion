def printNumbersFromNTo1WithoutUsingALoop num
    print [*1..num].reverse.join(" ")
end

puts printNumbersFromNTo1WithoutUsingALoop 5