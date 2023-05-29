import java.util.Scanner;

public class FindAverageOfDigitsOfANumberByRecursion {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int num = sc.nextInt();
        System.out.println(findAverage(num));
    }
    static double findAverage(int num){
        return helper(num,0,0);
    }
    static double helper(int num, int sum, int count){
        if(num == 0){
            return (double)sum/count;
        } return helper(num/10, sum + num%10, count+1);
    }
}
