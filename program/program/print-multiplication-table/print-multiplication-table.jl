print("Enter a number : ")
num = parse(Int64, readline(stdin))
for i in 1:10
    println("$num x $i = ",num*i)
end  
