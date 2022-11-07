import java.util.Scanner;

public class FindCubeRootOfANumber {
    public static void main(String args[]){
        double i, precision = 0.000001;
        System.out.println("Enter a number:");
        Scanner sc = new Scanner(System.in);
        int num = sc.nextInt();

        for(i = 1; (i*i*i) <= num; ++i);
        for(--i; (i*i*i) < num; i += precision);
        System.out.println("Cube root of " + num + " is "+i);
    }
}
