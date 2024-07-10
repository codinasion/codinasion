def decimal_to_hexadecimal(decimal)

  hex_digits = "0123456789ABCDEF"


  hexadecimal = ""


  while decimal > 0
    # Get the remainder when divided by 16
    remainder = decimal % 16


    hexadecimal = hex_digits[remainder] + hexadecimal


    decimal /= 16
  end

  return hexadecimal
end

decimal_number = 255

# Convert and print the result
hexadecimal_number = decimal_to_hexadecimal(decimal_number)
puts "Decimal: #{decimal_number} => Hexadecimal: #{hexadecimal_number}"
