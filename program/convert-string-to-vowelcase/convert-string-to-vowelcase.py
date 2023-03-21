def Check_Vow(char, vowels):
    if char in vowels:
        return char.upper()
    return char.lower()


def vowelCasePy(string_):
    vowels = "AaEeIiOoUu"
    new_string = ""
    for char in string_:
        new_string += Check_Vow(char, vowels)
    return new_string
