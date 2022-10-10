def recursum(number,reverse):
  if number==0:
    return reverse
  remainder = int(number%10)
  reverse = (reverse*10)+remainder
  return recursum(int(number/10),reverse)

num = int(input("Enter the Number:"))
reverse = 0
print(recursum(num,reverse))