print "Enter number : "
num = gets.chomp.to_i

for i in 1..num do
    for j in 1..i do
        print "#{j} "
    end
    puts ""
end