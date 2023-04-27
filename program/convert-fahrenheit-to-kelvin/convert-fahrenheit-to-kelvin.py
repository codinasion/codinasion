def fahrenheit_to_kelvin(temp_f):
    try:
        temp_k = (temp_f - 32) * 5 / 9 + 273.15
        return temp_k
    except TypeError as e:
        print(f"Error: The input temperature must be a numerical value. {e}")
    except Exception as e:
        print(f"An unexpected error occurred. {e}")


if __name__ == "__main__":
    fahrenheit = int(input("Fahrenheit input: "))
    print("Kelvin:", fahrenheit_to_kelvin(fahrenheit))

