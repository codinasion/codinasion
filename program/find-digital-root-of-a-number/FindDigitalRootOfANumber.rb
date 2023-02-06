print "Input: "

number = gets.chomp

if number == "0"
    puts "Output: 0"
end

ans = 0
for i in 0..number.length
    ans = (ans + number[i].to_i) % 9
end
    
if ans == 0
    puts "Output: 9"
else
    puts "Output: #{ans % 9}"
end