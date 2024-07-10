import java.util.*

fun celsiusToKelvin(celsius: Double): Double {
    return celsius + 273.15
}

fun main() {
    val celsius = -40
    val kelvin = celsiusToKelvin(celsius)

    println("Input (C): $celsius")
    println("Output (K): $kelvin")
}
