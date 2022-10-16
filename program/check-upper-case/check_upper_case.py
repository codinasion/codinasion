
def check_upper_case(char: str) -> bool:
    if char.upper() == char:
        return True
    else:
        return False


char_input = input()
if check_upper_case(char_input):
    print("Upper Case")
else:
    print("Lower Case")
