#!/usr/bin/ruby
class Armstrong
puts "Enter a number"
number=STDIN.gets.to_i
sum=0
d=number
while (d!=0)
  sum=sum+(d%10)*(d%10)*(d%10)
  d=d/10
end
if(sum==number)
  puts "It is an Armstrong number"
else
  puts "It is not an Armstrong number"
end
end
