def selection_sort(list)
  n = list.length
  
  for i in 0...(n - 1)
    # Set current element as minimum
    min_index = i
    
    # Check the element to be minimum
    for j in (i + 1)...n
      if list[j] < list[min_index]
        min_index = j
      end
    end
    
    # Swap the minimum element with the current element
    if min_index != i
      list[i], list[min_index] = list[min_index], list[i]
    end
  end
  
  list
end

# Example usage:
unsorted_list = [64, 25, 12, 22, 11]
sorted_list = selection_sort(unsorted_list)
puts "Sorted list: #{sorted_list}"
