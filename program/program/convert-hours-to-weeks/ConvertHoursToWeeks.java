import java.util.Scanner;

public class ConvertHoursToWeeks {
    public static double hoursToWeeks(double hours) {
        return hours / (24 * 7);
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter the number of hours: ");
        double hours = scanner.nextDouble();
        double weeks = hoursToWeeks(hours);
        System.out.println(hours + " hours is equal to " + weeks + " weeks.");
    }
}
