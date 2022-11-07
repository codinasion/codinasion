import java.util.Scanner;

public class swap {

    public static void main(String[] args) {
        int num1,num2;
        Scanner s=new Scanner(System.in);
        System.out.println("Enter the two numbers");
        num1=s.nextInt();
        num2=s.nextInt();
        System.out.println("Before swap: Number1 = " + num1 + " Number2 = " + num2);
        num1=num1+num2;
        num2=num1-num2;
        num1=num1-num2;
        System.out.println("After swap: Number1 = " + num1 + " Number2 = " + num2);
    }
}
