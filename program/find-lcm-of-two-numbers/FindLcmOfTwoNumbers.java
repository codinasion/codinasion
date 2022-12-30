import java.util.Scanner;

public class findlcmoftwonumbers {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.print("Input : ");
        int num1 = input.nextInt();
        int num2 = input.nextInt();
        int min = 0 ;
        int max = 0;
        if (num1<num2) {
            min = num1;
            max = num2;
        }
        else {
            min = num2;
            max = num1;
        }
        for (int i = 1; i < max+1; i++) {
            if ((min*i)%max==0) {
                System.out.println("Output : "+min*i);
                break;
            }

        }
    }
}
