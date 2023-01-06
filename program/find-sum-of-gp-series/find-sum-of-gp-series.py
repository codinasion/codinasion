

def findSumOfGpSeries(firstNumber,ratio,length):

    power = pow(ratio,length) 
    ans = (firstNumber*(power - 1)/(ratio-1))

    return ans


if __name__ == "__main__":
    firstNumber = float(input("give first number:\n"))
    ratio = float(input("give ratio:\n"))
    length = float(input("give length:\n"))
    print("The sum of the given gp series is ")
    print(findSumOfGpSeries(firstNumber,ratio,length))
