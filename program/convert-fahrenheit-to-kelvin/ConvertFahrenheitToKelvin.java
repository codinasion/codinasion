import java.util.Scanner;
public class ConvertFahrenheitToKelvin {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Input (ºF): ");
        int fahrenheit = sc.nextInt();
        sc.close();

        System.out.print("Output (K): ");
        int kelvin = (((fahrenheit - 32) * 5 / 9) + 273.15);
        System.out.println(kelvin);
    }
}