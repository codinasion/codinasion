def octal_to_decimal(octal)
    decimal = 0
    power = 0
    while octal != 0
      digit = octal % 10
      decimal += digit * (8 ** power)
      octal /= 10
      power += 1
    end
    return decimal
  end

# Example usage:
octal_number = 123
decimal_number = octal_to_decimal(octal_number)
puts "Octal: #{octal_number} => Decimal: #{decimal_number}"