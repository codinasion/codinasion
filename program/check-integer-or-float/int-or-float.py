
def check_integer_or_float(input_str: str) -> None:
    if '.' in input_str:
        print("Float")
    else:
        print("Integer")


guess = input()
check_integer_or_float(guess)
