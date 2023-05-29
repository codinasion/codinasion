import java.util.Scanner;

public class FindSumOfNNaturalNumbersUsingFormula {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int num = sc.nextInt();
        System.out.println(sumOfnNaturalNumbers(num));
}
    static int sumOfnNaturalNumbers(int n){
        return (n*(n+1))/2;
    }
}
