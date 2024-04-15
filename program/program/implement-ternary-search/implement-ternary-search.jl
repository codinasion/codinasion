function ternary_search(arr, value)
    l = 1  # Julia arrays are 1-indexed
    r = length(arr)
    
    while l <= r
        partitionSize = div(r - l, 3)
        mid1 = l + partitionSize
        mid2 = r - partitionSize
        
        if arr[mid1] == value
            return mid1
        elseif arr[mid2] == value
            return mid2
        end
        
        if value < arr[mid1]
            r = mid1 - 1
        elseif value > arr[mid2]
            l = mid2 + 1
        else
            l = mid1 + 1
            r = mid2 - 1
        end
    end
    
    return -1  # Value not found
end

# Example usage
list = [1, 2, 3, 4, 5]
value = 4
result = ternary_search(list, value)

if result != -1
    println("Element found at index: $result")
else
    println("Element not found in the array")
end
