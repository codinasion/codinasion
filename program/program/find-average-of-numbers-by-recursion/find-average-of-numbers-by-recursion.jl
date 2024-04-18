function average_recursive(numbers, n)
    if n == 0
        return 0.0
    else
        return (numbers[n] + (n - 1) * average_recursive(numbers, n - 1)) / n
    end
end

function main()
    println("Enter numbers separated by spaces:")
    input = readline()
    numbers = [parse(Float64, num) for num in split(input)]
    avg = average_recursive(numbers, length(numbers))
    println("Average:", avg)
end

main()
