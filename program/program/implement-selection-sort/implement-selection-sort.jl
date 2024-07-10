function selection_sort(arr)
    n = length(arr)
    
    for i in 1:n-1
        # Find the minimum element in the unsorted section of the array
        min_index = i
        for j in i+1:n
            if arr[j] < arr[min_index]
                min_index = j
            end
        end

        # Swap the minimum element with the first element
        if min_index != i
            arr[i], arr[min_index] = arr[min_index], arr[i]
        end
    end
    
    return arr
end

# Example describing the Selection Sort
arr = [64, 25, 12, 22, 11]
sorted_arr = selection_sort(arr)
println("Sorted array: ", sorted_arr)
