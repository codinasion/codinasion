import java.util.Scanner;

public class ConvertKilometersToMiles{
    public static void main(String[] args) {
        try (Scanner sc = new Scanner(System.in)) {
            System.out.print("Enter Kilometers:");
            double km = sc.nextDouble();

            double miles = km/(1.609);

            System.out.println("Distance in mile:" +miles);
        }
    }
}
