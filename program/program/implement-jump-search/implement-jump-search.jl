function jump_search(arr::Vector{T}, x::T) where T
    n = length(arr)
    step = floor(Int, sqrt(n))
    prev = 0
    
    # Finding the block where element is present
    while arr[min(step, n)-1] < x
        prev = step
        step += floor(Int, sqrt(n))
        if prev >= n
            return -1  # Element not found
        end
    end
    
    # Linear search for x in block beginning with prev
    while arr[prev] < x
        prev += 1
        
        # If we reached the next block or end of array, element is not present.
        if prev == min(step, n)
            return -1  # Element not found
        end
    end
    
    # If element is found
    if arr[prev] == x
        return prev
    end
    
    return -1  # Element not found
end

# Example usage
arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
x = 7

result = jump_search(arr, x)
if result != -1
    println("Element $x is at index $result")
else
    println("Element $x is not present in the array")
end
