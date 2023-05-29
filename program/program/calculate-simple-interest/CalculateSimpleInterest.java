import java.util.Scanner;

public class CalculateSimpleInterest {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter");
        System.out.print("Principle Amount: ");
        double p = sc.nextDouble();
        System.out.print("Rate of Interest: ");
        double r = sc.nextDouble();
        System.out.print("Time(in Days): ");
        double t = sc.nextDouble();
        System.out.println("Simple Interest: " +simpleInterest(p,r,t));
    }
    static double simpleInterest(double principleAmount, double rate, double time){
        return (principleAmount * rate * time)/100;
    }
}
