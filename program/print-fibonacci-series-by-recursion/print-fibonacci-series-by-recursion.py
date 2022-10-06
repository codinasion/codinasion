def fibonacci(n):
   if n <= 1:
       return n
   else:
       return(fibonacci(n-1) + fibonacci(n-2))

number=int(input())
for i in range(number):
    print(fibonacci(i),end=" ")