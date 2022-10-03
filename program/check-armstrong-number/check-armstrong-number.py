n=int(input("Enter a number"))
x=n
s=0
while n:
    r=n%10
    s=s+r**3
    n=n//10
if s==x:
    print("It is an armstrong number")
else:
    print("It is not an armstrong number")
