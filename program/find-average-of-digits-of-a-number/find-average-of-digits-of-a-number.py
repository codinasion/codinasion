#taking input from the user
n=int(input("Enter a number:"))
sum=0
c=0
#finding the sum of the digit and length of the number
while(n>0):
    rem=n%10
    sum+=rem
    c+=1       #counting the digits
    n//=10
#calculating avg digit of the number
avg=sum/c
print(avg)
