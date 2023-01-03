def findTheAverageOfAllNumbersInAnArray numArray
    average = numArray.reduce(:+).to_f / numArray.count
    puts average.to_s.chomp(".0")
end

findTheAverageOfAllNumbersInAnArray [1,2,3,4,5]