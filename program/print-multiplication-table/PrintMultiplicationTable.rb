def printMultiplicationTable number
    numArray = (1..10).to_a
    numArray.each do |num|
        puts "#{number} x #{num} = #{num*number}"
    end
end

printMultiplicationTable 2