import java.util.Scanner;

public class FindMaxContiguousSubarraySumCircular{

    public static void main(String[] args){

        Scanner sc = new Scanner(System.in);
        
        int n;
        int total_sum = 0, ans;
        n = sc.nextInt();

        int[] arr = new int[n];
        for(int i = 0; i < n; i++){
            arr[i] = sc.nextInt();
            total_sum+= arr[i];
        }

        int curr_max = arr[0], curr_min = arr[0], max_subarr_sum = arr[0], min_subarr_sum = arr[0];
        for(int i = 1; i < n; i++){
            curr_max = Math.max(curr_max + arr[i], arr[i]);
            curr_min = Math.min(curr_min + arr[i], arr[i]);

            max_subarr_sum = Math.max(max_subarr_sum, curr_max);
            min_subarr_sum = Math.min(min_subarr_sum, curr_min);
        }

        ans = Math.max(max_subarr_sum, total_sum - min_subarr_sum);
        System.out.println(ans);
        sc.close();
    }

}

