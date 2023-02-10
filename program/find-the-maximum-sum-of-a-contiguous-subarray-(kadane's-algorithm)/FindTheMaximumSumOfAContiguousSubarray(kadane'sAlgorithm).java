public class FindTheMaximumSumOfAContiguousSubarray{
//(kadane'sAlgorithm)
    public static void main(String[] args) {
    int[] numberArray = {-2, 1, 9, 4, -1, 2, -2, -5, 4};
    System.out.println("Maximum contiguous sum is "
      +  maxSubArraySum(numberArray));
  }
  static int maxSubArraySum(int numberArray[]) 
    { 
        int max_so_far = numberArray[0]; 
        int curr_max = numberArray[0]; 
  
        for (int i = 1; i < numberArray.length; i++) 
        { 
            curr_max = Math.max(numberArray[i], curr_max+numberArray[i]); 
            max_so_far = Math.max(max_so_far, curr_max); 
        } 
        return max_so_far; 
    } 
}
 

