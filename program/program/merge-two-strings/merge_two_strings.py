# This python script calculates the  concatenation of two given strings str1 and str2

string1 = str(input("Enter a string  : "))
string2 = str(input("Enter another string : "))


def mergeString(str1: str, str2: str) -> str:
    return str1 + str2


print("Merged String : ", mergeString(string1, string2))
