def is_lower_case(char: str) -> bool:
    if char.lower() == char:
        return True
    else:
        return False


char_inp = input()
if is_lower_case(char_inp):
    print("Lower Case")
else:
    print("Upper Case")
