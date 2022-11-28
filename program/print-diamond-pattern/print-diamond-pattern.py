def printDiamondPattern(number:int) -> None:
    """
    print Diamond Pattern
    Arguments:
        number:int
    Returns:
        None
    """

    #  print the first half of the pattern
    
    NumberOfSpaces = number
    NumberOfStars= 1
    for i in range(0,number):
        print(" "*NumberOfSpaces,end=f"{'*'*NumberOfStars}\n")
        NumberOfSpaces = NumberOfSpaces-1
        NumberOfStars = NumberOfStars+2
    

    #  print the second half
    
    NumberOfSpaces = 2
    NumberOfStars= NumberOfStars-4


    for i in range(0,number-1):
        print(" "*NumberOfSpaces,end=f"{'*'*NumberOfStars}\n")
        NumberOfSpaces = NumberOfSpaces+1
        NumberOfStars = NumberOfStars-2
        







if __name__ == "__main__":
    number = int(input("Type A number : "))
    printDiamondPattern(number)





#contributed by MedMly20208 Mohamed Moulay