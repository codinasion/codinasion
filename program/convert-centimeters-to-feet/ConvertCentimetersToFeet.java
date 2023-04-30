import java.util.Scanner;

public class ConvertCentimetersToFeet {

	public static double centimetersToFeet(double cen) {
		return cen/30.48;
	}
	
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
        System.out.print("Enter length in Centimeters: ");
        double centimeters = scanner.nextDouble();
        double feets = centimetersToFeet(centimeters);
        System.out.println(centimeters + " centimeters is equal to " + feets + " feets.");
	}

}
