#Program to Implement Linear Search in Ruby


def linear_search(array, target)

    #Function to implement Linear Search
    #Arguments:
    #    array  :- Array of elements to search in. 
    #    target :- Target value to be searched in the array.

    array_length = array.length()
    for index in 0...array_length do
        if(array[index]==target)
            return index
        end
    end
    
    # -1 indicates that the target value does not exist in the array
    return -1
end


#Test Case
array = Array.[](1,2,3,4,5)
target = 4
search_result = linear_search(array, target)

if(search_result == -1)
    puts " The target value is not in the array"
else
    puts " The target value is at the index : #{search_result}"
end

