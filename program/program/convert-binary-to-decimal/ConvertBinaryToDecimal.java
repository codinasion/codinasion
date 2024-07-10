import java.util.Scanner;

public class ConvertBinaryToDecimal {
	public static void main(String[] args) {
		System.out.print("Enter Binary Number   : ");

		Scanner sc = new Scanner(System.in);

		String binary = sc.nextLine();

		sc.close();

    Integer decimal = Integer.parseInt(binary, 2);

    System.out.println("Decimal Number   : " + decimal.toString());
	}
}