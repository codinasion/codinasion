function binary_search(arr, x)
    lower_bound = 1
    upper_bound = length(arr)
    
    while lower_bound <= upper_bound
        mid_point = lower_bound + (upper_bound - lower_bound) ÷ 2
        
        if arr[mid_point] < x
            lower_bound = mid_point + 1
        elseif arr[mid_point] > x
            upper_bound = mid_point - 1
        else
            return mid_point  # x found at mid_point
        end
    end
    
    return -1  # x does not exist
end

# Example usage
arr = [2, 3, 4, 10, 40]
x = 10

result = binary_search(arr, x)
if result != -1
    println("Element $x is present at index $result")
else
    println("Element $x is not present in array")
end
