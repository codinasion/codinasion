def binary_to_decimal(binary)
  decimal = 0
  binary.reverse.each_char.with_index do |bit, index|
    if bit == '1'
      decimal += 2**index
    elsif bit != '0'
      raise ArgumentError, "Invalid binary digit: #{bit}"
    end
  end
  return decimal
end

# Input binary number
print "Enter a binary number: "
binary = gets.chomp

begin
  decimal = binary_to_decimal(binary)
  puts "Decimal representation: #{decimal}"
rescue ArgumentError => e
  puts "Error: #{e.message}"
end
