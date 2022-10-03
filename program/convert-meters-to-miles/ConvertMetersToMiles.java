import java.util.Scanner;

public class ConvertMetersToMiles {
	public static void main(String[] args) throws Exception {
		System.out.print("input   : ");
		Scanner sc = new Scanner(System.in);
		Double meter = sc.nextDouble();
		sc.close();
		System.out.println("ouput   : " + Math.round(meter / 1609));
	}
}