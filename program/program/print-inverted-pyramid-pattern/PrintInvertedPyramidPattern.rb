puts "Enter the inverted pyramid number to display: "
user_input = gets.to_i
def printInvertedPyramidPattern number
    (1..number).each { |i| print "#{i} "}
    puts
    printInvertedPyramidPattern(number - 1) if number > 0 
end

printInvertedPyramidPattern user_input