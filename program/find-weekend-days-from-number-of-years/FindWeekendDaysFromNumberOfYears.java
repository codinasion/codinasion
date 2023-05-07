import java.util.Scanner;

public class FindWeekendDaysFromNumberOfYears{
    public static void main(String[] args){

        int years, weekends;
        Scanner scanner = new Scanner(System.in);

        System.out.println("Enter number of years : ");
        years = scanner.nextInt();

        weekends = years * 52 * 2;
        System.out.println(weekends);

        scanner.close();

    }
}