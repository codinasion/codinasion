module Octal_to_binary

  def self.convert(num)
    result = base10_to_base2(base8_to_base10(num))
    num.negative? ? -result : result
  end
  
  private

  def self.base8_to_base10(num)
    decimal = 0
    num.to_s.chars.reverse.each_with_index do |d, i|
      decimal += d.to_i * 8**i
    end
    decimal
  end

  def self.base10_to_base2(num)
    divide(num: num)
  end

  def self.divide(num: 0, reminder: 0, result: "")
    result.prepend((num % 2).to_s)
    return result.to_i if num == 0
    divide(num: num / 2, reminder: num % 2, result: result)
  end
end

puts Octal_to_binary.convert(12) # => 1010
