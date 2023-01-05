

def findSumOfGpSeries(firstNumber,ratio,length):

    power = pow(length,ratio)
    ans = (firstNumber*(power - 1)/(length-1))

    return ans


if __name__ == "__main__":
    firstNumber = float(input("give first number:\n"))
    ratio = float(input("give ration:\n"))
    length = float(input("give length:\n"))

    print(findSumOfGpSeries(firstNumber,ratio,length))