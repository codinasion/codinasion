def binary_to_decimal(binary)
  decimal = 0
  binary.reverse.each_char.with_index do |bit, index|
    decimal += bit.to_i * (2**index)
  end
  return decimal
end

def decimal_to_hexadecimal(decimal)
  hexadecimal = ''
  while decimal > 0
    remainder = decimal % 16
    if remainder < 10
      hexadecimal = remainder.to_s + hexadecimal
    else
      hexadecimal = ('A'.ord + remainder - 10).chr + hexadecimal
    end
    decimal /= 16
  end
  return hexadecimal
end

puts "Enter a binary number: "
binary_number = gets.chomp


if binary_number.match(/^[01]+$/)
  decimal_number = binary_to_decimal(binary_number)
  hexadecimal_number = decimal_to_hexadecimal(decimal_number)
  puts "Hexadecimal equivalent: #{hexadecimal_number}"
else
  puts "Invalid binary input. Please enter a valid binary number."
end
