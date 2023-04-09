
import java.util.Scanner;
public class ConvertFeetToMiles {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        System.out.println("This program will convert feet to miles!");
        System.out.print("Enter feet: ");
        int feet = scan.nextInt(); //scanning for user input of feet

        int miles = feet / 5280; //conversion for feet to miles
        System.out.println("Miles: " + miles); //output result in miles
    }
}