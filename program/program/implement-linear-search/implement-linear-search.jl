function linear_search(arr, target)
    for (index, value) in enumerate(arr)
        if value == target
            return index
        end
    end
    return -1  # If target not found
end


# Example showing the implementation of linear search
data = [1, 3, 5, 7, 9, 11, 13, 15]
target_value = 7


result = linear_search(data, target_value)

if result != -1
    println("Target value $target_value found at index $result.")
else
    println("Target value $target_value not found in the given array.")
end
