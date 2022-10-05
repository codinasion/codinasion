package project;
// importing Scanner for input object
import java.util.Scanner;
//creating class
class CalculateCompoundInterest {
    public static void main(String[] args) {
        //creating object in using new
        Scanner in = new Scanner(System.in);
        //getting principle, rate  and time as input
        System.out.print("Enter Principal amount: ");
        int Principal = in.nextInt();
        System.out.print("Enter Rate of the Interest: ");
        float Rate = in.nextFloat();
        System.out.print("Enter Time : ");
        int Time = in.nextInt();
        // calculating interest on basis of formula
        float Compound_interest =(float) (Principal*Math.pow((1 + (Rate/100)) , Time));
        // printing calculated compound interest
        System.out.println("Compound interest applied :" + Compound_interest);
    }
}