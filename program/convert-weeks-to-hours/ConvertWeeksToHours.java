import java.util.Scanner;

public class ConvertWeeksToHours {

	public static double weeksToHours(double hours) {
        return (24 * 7) * hours;
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter the number of weeks: ");
        double weeks = scanner.nextDouble();
        double hours = weeksToHours(weeks);
        System.out.println(weeks + " weeks is equal to " + hours + " hours.");
    }
}
