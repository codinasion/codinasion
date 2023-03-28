import java.util.Scanner;
class ConvertPoundToKilogram {
    public static Scanner scan = new Scanner(System.in);
    public static void main(String[] args) {
        final double initialPoundToKilo = 0.4535924;
        
        System.out.println("Enter pound : ");
        double pound = scan.nextDouble();
        
        double kilogram = pound * initialPoundToKilo;
        System.out.println("Kilogram : "+kilogram);
        
        scan.close();
    }
}
