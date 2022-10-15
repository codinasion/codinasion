

def SwapTwoNumbersWithoutUsingThirdVariable(numberOne: float, numberTwo: float)->list:
    """
    Swap Two Numbers Without Using Third Variable
    Arguments:
        numberOne: a float
        numberTwo: a float
    Returns:
       list
    """

    return  [numberTwo,numberOne]


if __name__ == "__main__":
    numOne = float(input("numOne: "))
    numTwo = float(input("numTwo: "))
    print("**old values")
    print("number One",numOne)
    print("number Two",numTwo)
    [numOne,numTwo] = SwapTwoNumbersWithoutUsingThirdVariable(numOne,numTwo)
    print("**New values")
    print("number One",numOne)
    print("number Two",numTwo)