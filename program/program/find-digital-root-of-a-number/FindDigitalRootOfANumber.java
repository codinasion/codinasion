import java.util.Scanner;

public class FindDigitalRootOfANumber{
    public static void main(String[] args) {
        Scanner scanner=new Scanner(System.in);
        int value=scanner.nextInt();
        System.out.println(findDigitalRootOfANumber(value));
        scanner.close();
    }

    private static int findDigitalRootOfANumber(int value) {
        if(value<10) return value;
        value=value%10+findDigitalRootOfANumber(value/10);
        return findDigitalRootOfANumber(value);
    }
}