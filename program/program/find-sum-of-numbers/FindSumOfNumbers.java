import java.util.*;
import java.lang.*;

public class FindSumOfNumbers{
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String[] input = sc.nextLine().split(" ");
        
        int sum=0;
        for (int i=0;i<input.length;i++){
            sum = sum + Integer.parseInt(input[i]);
        }
        System.out.println(sum);
    }
}