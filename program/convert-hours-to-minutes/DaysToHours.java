import java.util.Scanner;

public class DaysToHours {

	public static void main(String[] args) {

		long days;

		Scanner sc = new Scanner(System.in);

		System.out.println("Enter days:");
		days = sc.nextInt();

		long hours = days * 24;

		System.out.println(hours + " hr");

	}
}
