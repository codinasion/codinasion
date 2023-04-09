def SumOfDigits(num,sum)
	if num > 0 
		sum += (num % 10);
		SumOfDigits(num / 10,sum);
	else
	    return sum;    
	end
end

print "Enter a number: ";
number = gets.chomp.to_i;  

result = SumOfDigits(number, 0);
print "Sum of digits: ",result; 
