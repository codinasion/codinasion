def reverseNum num 
    return num if num.to_s.length <= 1

    reversedNum = reverseNum(num.to_s[1..-1])
    reversedNum += num.to_s[0]
    reversedNum
end

puts reverseNum 12345
