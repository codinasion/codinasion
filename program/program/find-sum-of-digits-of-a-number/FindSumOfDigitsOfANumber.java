import java.util.Scanner;

public class FindSumOfDigitsOfANumber {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int num = sc.nextInt();
        System.out.println(findSum(num));
    }
    static int findSum(int n){
        int sum = 0;
        while(n != 0){
            sum += n%10;
            n/= 10;
        } 
      return sum;
    }
}
