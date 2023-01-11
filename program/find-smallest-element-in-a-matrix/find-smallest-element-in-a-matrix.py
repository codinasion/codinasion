# smallest element in a matrix


def findSmallestElementInAMatrix(matrix):

    smallestElement = min(matrix[0])

    for i in range(1,len(matrix)):
        if min(matrix[i]) < smallestElement:
            smallestElement = min(matrix[i])

    
    return smallestElement


if __name__=="__main__":
    print(findSmallestElementInAMatrix([[10,222,43],[0,-15,336],[437,854,49]]))