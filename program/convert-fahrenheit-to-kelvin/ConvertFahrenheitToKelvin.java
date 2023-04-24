import java.util.Scanner;

public class ConvertFahrenheitToKelvin {

    public static double FahrentoKelvin(double n){
        return (n-32)*(5/9)+273.15;
    }

    public static void main(String[] args){
        Scanner scan = new Scanner(System.in);
        Double value = scan.nextDouble();
        FahrentoKelvin(value);
        System.out.println(value);
    }
}
