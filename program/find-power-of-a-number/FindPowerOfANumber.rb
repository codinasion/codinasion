module Power

  def self.power(num, pow)
    result = num
    (pow-1).times { |i| result *= num }
    result
  end
  
end

puts Power.power(2, 3) # => 8