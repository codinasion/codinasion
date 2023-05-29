def printNumber(num)
  if num > 0
    printNumber(num - 1)
    print("#{num} ") 
  end
end

puts printNumber(5)