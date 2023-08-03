def printNumbersFromNtoOneWithoutUsingALoop(number: int) -> None:
    """
    print Numbers From N to 1 Without Using a Loop
    Arguments:
        number:int
    Returns:
        None
    """

    if number == 0:
        return

    print(number, end=" ")
    printNumbersFromNtoOneWithoutUsingALoop(number - 1)


if __name__ == "__main__":
    number = int(input("Type A number : "))
    printNumbersFromNtoOneWithoutUsingALoop(number)


# contributed by MedMly20208 Mohamed Moulay
