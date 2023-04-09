function reverse(n::Integer)
    if(n<=0)
        return n
    else
        print(n%10)
        reverse(Int(floor(n/10)))
    end
end

println("Enter the number")
n=readline()
n=parse(Int128, n)
print("The reverse of the number: ")
if(n<0)
    print("-")
end
n=n*(-1)
reverse(n)
println("")




    