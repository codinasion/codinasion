def sum_of_digit(n):
    if n == 0:
        return 0
    return (n % 10 + sum_of_digit(int(n / 10)))
 

num = int(input())
result = sum_of_digit(num)
print(result)