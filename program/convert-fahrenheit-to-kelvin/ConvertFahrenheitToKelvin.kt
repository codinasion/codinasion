fun main() {

    print("Enter temperature in Fahrenheit: ")
    val fahrenheit = readLine()?.toDoubleOrNull()

    if (fahrenheit == null) {
        println("Invalid input. Please enter a valid number.")
        return
    }

    val kelvin = (fahrenheit - 32) * 5 / 9 + 273.15

    println("Temperature in Kelvin: $kelvin")
}
