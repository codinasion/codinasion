import java.util.Scanner;

public class ConvertMilesToFeet {
	
	public static double milesToFeet(double miles) {
		return 5280*miles;
	}
	
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
        System.out.print("Enter the number of miles: ");
        double miles = scanner.nextDouble();
        double feet = milesToFeet(miles);
        System.out.println(miles + " miles is equal to " + feet + " feet.");
	}

}
