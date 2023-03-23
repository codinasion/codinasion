import java.util.Scanner;

class convertpoundtokg {
    public static void main(String[] args) {
        Scanner scnr = new Scanner(System.in);
        System.out.print("Enter weight in pounds: ");
        double pounds = scnr.nextDouble();
        double kilograms = pounds * 0.453592;
        System.out.println(pounds + " pounds is equal to " + kilograms + " kilograms.");
        scnr.close();
    }
}
