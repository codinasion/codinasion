import java.util.Scanner;

public class ConvertDaysToHours {

	public static void main(String[] args) {

		long days;

		Scanner sc = new Scanner(System.in);

		System.out.print("Enter days: ");
		days = sc.nextInt();
		sc.close();

		long hours = days * 24;

		System.out.println(hours + " hr");

	}
}