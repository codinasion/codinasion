def findAverageOfNumbers numArray
    average = (numArray.reduce(:+) / numArray.count.to_f).to_s
    puts average.to_s.gsub(/(\.)0+$/, '')  #to_s.gsub method strips any trailing zeros
end

findAverageOfNumbers [1,2,3,4,5]