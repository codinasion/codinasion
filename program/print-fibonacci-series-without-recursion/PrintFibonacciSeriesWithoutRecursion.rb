puts "Please enter a number: "
input_number = gets.to_i

def printFibonacciSeriesWithoutRecursion number
    fibonacciSequence = [0,1]

    for index in 2..number-1 do
        fibonacciSequence[index] = fibonacciSequence[index-1] + fibonacciSequence[index-2]
    end

    print "The Fibonacci Series for the Number #{number} is #{fibonacciSequence.join(" ")}"
end

puts printFibonacciSeriesWithoutRecursion(input_number)
