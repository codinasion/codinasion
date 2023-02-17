import java.util.Scanner;
public class convertastringtointigerwithoutbuiltinfunction {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        String str = input.next();
        int result = 0;
        for (int i = 0; i < str.length(); i++) {
            result = result * 10 + (str.charAt(i) - '0');
        }
        System.out.println(result);
        input.close();
    }
}
