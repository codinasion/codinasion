import java.util.Arrays;
import java.util.Scanner;

public class SplitStringIntoArrayOfWords {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter the String: ");
        String str = sc.nextLine();
        System.out.println(Arrays.toString(splitString(str)));
    }
    static String [] splitString(String str){
        String [] result = str.split(" ");
        return result;
    }
}
