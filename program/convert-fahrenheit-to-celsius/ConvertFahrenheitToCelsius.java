import java.util.Scanner;
public class ConvertFahrenheitToCelsius {
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        System.out.print("Input ( F )  : ");
        int fahrenheit = sc.nextInt();
        System.out.print("Output ( C ) : ");
        int celcius = (fahrenheit - 32) * 5/9;
        System.out.println(celcius);

    }

}

//can use float , double or any other data type according to convienence.
