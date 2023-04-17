# Function to check if string is anagram or not
def is_anagram(str1: str, str2: str) -> bool:
    """
    This function to check if string is anagram or not
    Args:
        str1: str  The first string entered by the user
        str2: str  The second string entered by the user

    Returns:
        True if the 2 strings contain the same words and False if not

    """
    return sorted(str1)== sorted(str2)

if __name__ == '__main__':
    string1 = input("write the first string: ")
    string2 = input("write the second string: ")
    if is_anagram(string1,string2):
        print("Anagram Strings")
    else:
        print("Not Anagram Strings")
