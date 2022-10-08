import java.util.Scanner;

class CheckAlphabet {
    public static void main(String[] args) {

        Scanner input = new Scanner(System.in);
        System.out.print("Input a character: ");

        char ch = input.next().charAt(0);

        if ((ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z')) {
            System.out.println(ch + " is an alphabet");
        } else {
            System.out.println(ch + " is not an alphabet");
        }
    }
}