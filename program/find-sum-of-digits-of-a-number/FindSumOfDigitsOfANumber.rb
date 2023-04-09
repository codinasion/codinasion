def sumOfDigits(num,sum)
	if num > 0 
		sum += (num % 10);
		sumOfDigits(num / 10,sum);
	else
	    return sum;    
	end
end

print "Enter a number : ";
number = gets.chomp.to_i;  

result = sumOfDigits(number, 0);
print "Sum of given digits : ",result;
