# Printing a number in words in indian number system
def Convert(num):
    lent = len(str(num))
    if num == 0:
        print()
    elif num in D:
        print(D[num], end=" ")
    elif lent == 2:
        ones = num % 10
        tens = num - ones
        print(D[tens], D[ones], end=" ")
    elif lent == 3:
        hun = num // 100
        print(D[hun] + " Hundred", end=" ")
        Convert(num % 100)
    elif lent in [4, 5]:
        tent = num // 1000
        Convert(tent)
        print("Thousand", end=" ")
        Convert(num % 1000)
    elif lent in [6, 7]:
        tenl = num // 100000
        Convert(tenl)
        print("Lakh", end=" ")
        Convert(num % 100000)
    else:
        tenc = num // 10000000
        Convert(tenc)
        print("Crore", end=" ")
        Convert(num % 10000000)


# ____Main___
# input num
D = {
    1: "One",
    2: "Two",
    3: "Three",
    4: "Four",
    5: "Five",
    6: "Six",
    7: "Seven",
    8: "Eight",
    9: "Nine",
    10: "Ten",
    11: "Eleven",
    12: "Twelve",
    13: "Thirteen",
    14: "Fourteen",
    15: "Fiveteen",
    16: "Sixteen",
    17: "Seventeen",
    18: "Eighteen",
    19: "Nineteen",
    20: "Twenty",
    30: "Thirty",
    40: "Forty",
    50: "Fifty",
    60: "Sixty",
    70: "Seventy",
    80: "Eighty",
    90: "Ninety",
}
num = int(input("Enter number :"))
Convert(num)
