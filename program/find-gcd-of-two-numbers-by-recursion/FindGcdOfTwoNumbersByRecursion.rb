def findGCDOfTwoNumbersByRecursion a, b
    while a != b 
        if a > b
            return findGCDOfTwoNumbersByRecursion(a - b, b)
        else
            return findGCDOfTwoNumbersByRecursion(a, b - a)
        end
    end
    return a
end

puts findGCDOfTwoNumbersByRecursion 12, 18
