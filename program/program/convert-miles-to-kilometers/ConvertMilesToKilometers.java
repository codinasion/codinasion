import java.util.Scanner;

public class ConvertMilesToKilometers{
    public static void main(String[] args) {
        try (Scanner sc = new Scanner(System.in)) {
            System.out.print("Enter distance (Miles):");
            int mile = sc.nextInt();

            double km = mile*(1.609);

            System.out.println("Distance in mile:" +km);
        }
    }
}