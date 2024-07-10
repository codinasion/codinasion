def moveZeros(a)
    len=a.length
    count=0
    for i in 0...len
        if a[i]!=0
            a[count]=a[i]
            count+=1
        end
    end

    while count<len
        a[count]=0
        count+=1
    end
    return a
end

puts moveZeros([1, 2, 0, 4, 3, 0, 5, 0])
