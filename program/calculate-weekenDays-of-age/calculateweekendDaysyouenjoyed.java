import java.util.Scanner;
public class calculateweekendDaysyouenjoyed {
    public static void main(String[] args) {
        Scanner scnr = new Scanner(System.in);
        System.out.print("Enter your age in years: ");
        int age = scnr.nextInt();
        int weekendDays = age * 52 * 2; // Assuming there are 52 weekend in a year and 2 days in a weekend
        System.out.println("You have enjoyed " + weekendDays + " weekend Days so far!");
        scnr.close();
    }
}