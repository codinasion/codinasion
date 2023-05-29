import java.util.Scanner;
class Convert {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        System.out.print("Enter price in rupees: ");
        double rupees = in.nextDouble();
        in.close();
        double paise = rupees * 100;
        System.out.println(rupees + " rupees = " + paise + " paise");
    }
}