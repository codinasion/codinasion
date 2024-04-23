def factorial_dp(n):
    # Initialize a list to store factorial results
    factorial = [1] * (n + 1)
    
    # Base case
    if n >= 0:
        factorial[0] = 1
    
    # Bottom-up DP approach
    for i in range(2, n + 1):
        factorial[i] = factorial[i - 1] * i
    
    return factorial[n]

# Example usage
n = int(input("Enter a non-negative integer to calculate factorial: "))
result = factorial_dp(n)
print(f"The factorial of {n} is {result}")
