function sum_of_squares(numbers::Array{Int, 1})
    return sum(x -> x^2, numbers)
end

function get_user_input()
    println("Enter numbers separated by spaces:")
    input_line = readline()
    try
        return [parse(Int, x) for x in split(input_line)]
    catch
        println("Error: Invalid input. Please enter only integers separated by spaces.")
        return []
    end
end

# Main program execution
numbers = get_user_input()
if !isempty(numbers)
    println("Sum of squares: ", sum_of_squares(numbers))
else
    println("No valid input provided.")
end
