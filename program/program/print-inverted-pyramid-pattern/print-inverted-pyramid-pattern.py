# print inverted pyramid pattern


def printInvertedPyramidPattern(number: int):
    endNumber = number

    for i in range(0, number):
        for j in range(1, endNumber + 1):
            print(j, end=" ")

        print("")
        endNumber = endNumber - 1


if __name__ == "__main__":
    number = int(input("type a number:"))
    printInvertedPyramidPattern(number)
