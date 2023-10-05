def hex_to_decimal(hex)
  decimal = 0
  hex = hex.reverse.upcase # Reverse the hexadecimal string and convert to uppercase

  hex.each_char.with_index do |char, index|
    digit_value = case char
      when '0'..'9' then char.to_i
      when 'A'..'F' then char.ord - 'A'.ord + 10
      else
        raise ArgumentError, "Invalid hexadecimal digit: #{char}"
    end

    decimal += digit_value * (16 ** index)
  end

  return decimal
end

def decimal_to_octal(decimal)
  octal = ""
  while decimal > 0
    remainder = decimal % 8
    octal = remainder.to_s + octal
    decimal /= 8
  end

  return octal
end

# Input hexadecimal number
print "Enter a hexadecimal number: "
hexadecimal = gets.chomp

begin
  decimal = hex_to_decimal(hexadecimal)
  octal = decimal_to_octal(decimal)
  puts "Octal representation: #{octal}"
rescue ArgumentError => e
  puts "Error: #{e.message}"
end
