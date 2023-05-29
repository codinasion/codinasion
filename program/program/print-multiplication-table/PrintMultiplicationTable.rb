# Multiplication table in ruby...

puts "Enter the number whose multiples must be shown : "
user_input = gets
def printMultiplicationTable number
    numArray = (1..10).to_a
    numArray.each do |num|
        puts "#{number} x #{num} = #{num*number}"
    end

end
printMultiplicationTable Integer (user_input)
