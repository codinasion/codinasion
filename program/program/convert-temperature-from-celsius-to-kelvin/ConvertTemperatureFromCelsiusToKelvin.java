import java.lang.*;

public class ConvertTemperatureFromCelsiusToKelvin {

    public static void main(String[] args) {
        double celsius = -40;
        double kelvin = celsiusToKelvin(celsius);
        System.out.println("Output (K) : " + kelvin);
    }

    public static double celsiusToKelvin(double celsius) {
        return celsius + 273.15;
    }
}
