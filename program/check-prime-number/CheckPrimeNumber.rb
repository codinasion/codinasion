module PrimeNumber

  Prime = "Prime Number"
  NotPrime = "Not Prime Number"

  def self.check_prime(number)
    
    return NotPrime if (0..2).include?(number) || number.negative?

    2.upto(number-1) do |n|
      if number % n == 0
        return NotPrime
      end
    end
    
    Prime
  end
end

puts PrimeNumber.check_prime(41) # => Prime Number
puts PrimeNumber.check_prime(16) # => Not Prime Number