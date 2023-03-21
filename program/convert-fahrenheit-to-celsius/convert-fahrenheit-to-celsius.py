# convert fahrenheit to celsius


def convertFahrenheitToCelsius(fahrenheit):
    return (fahrenheit - 32) * (5 / 9)


if __name__ == "__main__":
    fahrenheit = int(input("give fahrenheit :"))

    print(convertFahrenheitToCelsius(fahrenheit))
