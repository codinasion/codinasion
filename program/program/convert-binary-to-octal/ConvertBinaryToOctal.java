import java.util.Scanner;

public class ConvertBinaryToOctal{
    public static void main(String[] args){
        Scanner input = new Scanner(System.in);

        System.out.println("Enter a binary number");
        String binaryNum = input.nextLine();

        int decimalNum = Integer.parseInt(binaryNum, 2);
        String OctalNum = Integer.toOctalString(decimalNum);

        System.out.println("Octal Number    :       " + OctalNum);

        input.close();
    }
} 
