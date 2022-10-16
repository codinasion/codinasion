def convertHoursToMinutes(hours:float) -> float:
    """
    convert hours to minutes
    Arguments:
        hours:float 
    Returns:
        minutes:float
    """

    return hours*60


if __name__ == "__main__":
    Hours = int(input("Type number of hours : "))
    print("number of minutes is",convertHoursToMinutes(Hours))





#contributed by MedMly20208 Mohamed Moulay