import java.util.Scanner;

public class ConvertPoundToKilogram {
    public static void main(String[] args){
        Scanner input = new Scanner(System.in);

        System.out.print("Enter pound     :   ");
        double pound = input.nextFloat();

        double  kilogram = pound * 0.453592;

        System.out.println("Kilogram    :   " + kilogram);

        input.close();

    }

}
