module Average

  def self.get_avg(number, digits: [])
    return digits.sum / digits.length if number <= 0
    digits << (number % 10)
    get_avg(number / 10, digits: digits)
  end
  
end

puts Average.get_avg(123) # => 2
puts Average.get_avg(448) # => 5