def convert_to_integer(string):
    """
    Convert a string to an integer (without using built-in functions) with respect to the negative sign and the decimal point.

    Parameters:
        string (str): The string to be converted.

    Returns:
        int: The integer converted from the string.

    Examples:
        >>> convert_to_integer("123")
        123
        >>> convert_to_integer("-123")
        -123
        >>> convert_to_integer("123.456")
        123
        >>> convert_to_integer("-123.456")
        -123
        >>> convert_to_integer("asd")
        None

    Author: [@ahmedheltaher](https://github.com/ahmedheltaher)
    """
    if string == "":
        return None
    if string[0] == "-":
        negative = True
        string = string[1:]
    else:
        negative = False
    if "." in string:
        string = string[:string.index(".")]
    if not string.isdigit():
        return None
    integer = 0
    for i in range(len(string)):
        integer += int(string[i]) * 10 ** (len(string) - i - 1)
    if negative:
        integer = -integer
    return integer
