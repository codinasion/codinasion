import math


def findSurfaceAreaOfACone(radius:float,slantHeight:float) -> None:
    """
    find surface Area of A Cone 
    Arguments:
        radius:float
        slantHeight:float
    Returns:
        SurfaceArea : float


    Surface area of cone = π*  radius * ( radius + sqrt( radius^2 + slantHeight^2 ))


    """

    return math.pi*radius*(radius+math.sqrt(math.pow(radius,2)+math.pow(slantHeight,2)))


if __name__ == "__main__":
    Radius = float(input("Type Radius : "))
    slantHeight = float(input("Type slant height : "))


    print(findSurfaceAreaOfACone(Radius,slantHeight))





#contributed by MedMly20208 Mohamed Moulay