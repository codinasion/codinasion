def printFibonacci(a,b,term) 
	if term > 0 
		sum = a + b;
		print sum, " ";
		a = b;
		b = sum;
		printFibonacci(a, b, term-1);
	end
end

a=0;
b=1;

printFibonacci(a, b, 6);
