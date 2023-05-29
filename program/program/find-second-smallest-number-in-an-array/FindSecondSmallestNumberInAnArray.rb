def second_smallest_element(arr)
    arr = arr.sort
    return arr[1]
end

arr = [5,3,1,4,2]
print second_smallest_element(arr)
