def findSumOfCubesOfNumbers numArray
    puts numArray.sum{|num| num**3 }
end

findSumOfCubesOfNumbers [1,2,3,4,5]