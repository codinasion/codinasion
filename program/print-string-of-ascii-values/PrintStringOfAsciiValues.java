import java.util.Scanner;

public class PrintStringOfAsciiValues {
    public static void main(String[] args) {

        Scanner scnr = new Scanner(System.in);
        // Scanning three user input values
        System.out.println("Enter any three characters");
        // And storing them into corresponding character vaiables
        char a = scnr.next().charAt(0);
        char b = scnr.next().charAt(0);
        char c = scnr.next().charAt(0);

        //Assigning those character values to integer varaibles for getting the corresponding ascii values.
        int ascii1 = a;
        int ascii2 = b;
        int ascii3 = c;
        System.out.println(ascii1 + " " + ascii2 + " " + ascii3);
        scnr.close();
        }
}
