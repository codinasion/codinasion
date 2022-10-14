def convert_decimal_to_hexadecimal(n):
    if n==None:
        raise Exception("decimal is none")
    if n<0:
        raise Exception("decimal is negative")
    if type(n)!=int:
        raise Exception("decimal is not an integer")
    remainder = n%16
    quotient = n//16
    chars="ABCDEF"
    tmp=chars[remainder - 10] if remainder >= 10 else str(remainder)
    if quotient == 0:
        return tmp
    else:
        return convert_decimal_to_hexadecimal(quotient) + tmp