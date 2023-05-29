import java.util.Scanner;

public class ConvertDaysToMinutes {
	public static void main(String[] args) throws Exception {
		System.out.print("Enter number of Days   : ");

		Scanner sc = new Scanner(System.in);

		int num_of_days = sc.nextInt();

		sc.close();

    Integer total_minute = num_of_days * 1440;
    
		System.out.println("Total Minute   : " + total_minute.toString());
	}
}