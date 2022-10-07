

puts "Fibonacci Series: "
n=5

first=0
second=1
nextterm=0

if(n==1)
    puts 0
    return
end
if(n==2)
    puts 0
    puts 1
    return
end
puts 0

c=1
while(c<=n)
	if(c<=1)
		nextterm=c
	else
		puts nextterm
		nextterm=first+second
		first=second
		second=nextterm
	end
	c+=1
end