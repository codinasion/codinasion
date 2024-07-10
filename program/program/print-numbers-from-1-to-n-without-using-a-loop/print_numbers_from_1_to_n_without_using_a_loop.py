def print_numbers(n: int) -> None:
    if n <= 0:
        return

    print_numbers(n - 1)

    print(n)


user_input = int(input("Enter the value for n: "))
print_numbers(user_input)
