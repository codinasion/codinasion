import java.util.*;
class secondSmallest
{
    public static void main(String[] args) 
	{
        Scanner sc = new Scanner(System.in);
		System.out.print("Enter the number of elements in the array: ");
		int n=sc.nextInt();
		System.out.print("Enter " + n + " elements: ");
	  	int[] arr = new int[n];
	  	
		for(int i = 0; i < n; i++) arr[i]=sc.nextInt();

      	if(n<2) System.out.println("Invalid input: Array size less than 2");
      	else
      	{
        	int small = Integer.MAX_VALUE;
	    	int second_small = Integer.MAX_VALUE;
	    
	    	for (int i = 0; i < n; i++)
	    	{
	        	if (arr[i] <= small)
	        	{
		        	second_small = small;
		        	small = arr[i];
	       	 	}
	        	else if (arr[i] <= second_small && arr[i] >= small)
	        	{
		        	second_small = arr[i];
	       	 	}
	    	}
        	System.out.print("Second smallest element of the array: " + second_small);
        }        
    }
}