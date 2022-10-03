# A Python program to check if a character is an upper case or not
def check_upper_case(character):
    if character >= 'A' and character <= 'Z':
        return ('Upper Case')
    else:
        return ('Not Upper Case')


print(check_upper_case(input("Input : ")))
