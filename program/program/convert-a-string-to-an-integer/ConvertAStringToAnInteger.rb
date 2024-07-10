def stringToNumber(string)
  num = string.to_i
  num if num.to_s == string
end

puts stringToNumber '123'
