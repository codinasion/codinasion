function move_zeroes!(arr::Vector{Int})
    non_zero_index = 1

    # First pass: Move all non-zero elements to the front of the array
    for i in 1:length(arr)
        if arr[i] != 0
            arr[non_zero_index] = arr[i]
            non_zero_index += 1
        end
    end

    # Second pass: Fill the remaining positions with zeroes
    for i in non_zero_index:length(arr)
        arr[i] = 0
    end
end

# Test the function
arr = [0, 1, 0, 3, 12]
println("Original array: ", arr)

move_zeroes!(arr)

println("Array after moving zeroes: ", arr)
