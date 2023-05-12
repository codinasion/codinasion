module Average

  def self.get_avg(number)
    number.to_s.chars.map(&:to_i).sum / number.to_s.chars.length
    # For float
    # number.to_s.chars.map(&:to_i).sum.to_f / number.to_s.chars.length
  end
  
end

puts Average.get_avg(123) # => 2
puts Average.get_avg(448) # => 5
