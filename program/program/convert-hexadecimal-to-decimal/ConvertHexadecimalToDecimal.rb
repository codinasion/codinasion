def hex_to_decimal(hex)
  hex_digits = "0123456789ABCDEF"
  hex = hex.upcase
  decimal = 0

  hex.reverse.each_char.with_index do |h, index|
    decimal += hex_digits.index(h) * (16 ** index)
  end

  return decimal
end

# Input a hexadecimal number as a string
hexadecimal_number = "1A3"
decimal_result = hex_to_decimal(hexadecimal_number)

puts "Hexadecimal: #{hexadecimal_number}"
puts "Decimal: #{decimal_result}"
