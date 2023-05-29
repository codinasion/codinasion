def findSumOfSquaresOfNumbers numArray
    sum = 0
    numArray.each {|num| sum += num ** 2 }
    puts sum
end

findSumOfSquaresOfNumbers [1, 2, 3, 4, 5]