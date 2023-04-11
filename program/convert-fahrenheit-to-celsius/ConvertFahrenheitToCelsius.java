import java.util.Scanner;
public class ConvertFahrenheitToCelsius {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Input (ºF): ");
        int fahrenheit = sc.nextInt();
        sc.close();
        System.out.print("Output (ºC): ");
        int celcius = (fahrenheit - 32) * 5 / 9;
        System.out.println(celcius);
    }
}

// You can use float, double or any other data type according to convinience.
