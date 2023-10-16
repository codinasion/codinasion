def binary_to_decimal(binary)
  decimal = 0
  binary.reverse.each_char.with_index do |bit, index|
    decimal += bit.to_i * (2**index)
  end
  return decimal
end

def decimal_to_octal(decimal)
  octal = ''
  while decimal > 0
    remainder = decimal % 8
    octal = remainder.to_s + octal
    decimal /= 8
  end
  return octal
end

puts "Enter a binary number: "
binary_number = gets.chomp

if binary_number.match(/^[01]+$/)
  decimal_number = binary_to_decimal(binary_number)
  octal_number = decimal_to_octal(decimal_number)
  puts "Octal equivalent: #{octal_number}"
else
  puts "Invalid binary input. Please enter a valid binary number."
end
