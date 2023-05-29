using System;

public class FindTheMaximumSumOfAContiguousSubArrayKadanesAlgorithm{
	static int maxSumOfAContiguousSubArray(int []a){
		int maxSum=0;
		int sum=0;
		for(int i=0;i<a.Length;i++){
			sum=sum+a[i];
			if(sum>maxSum){
				maxSum=sum;
			}
			if(sum<0){
				sum=0;
			}
		}
		return maxSum;
	}
	public static void Main(string [] args){
		int []a={1, 2, 3, -2, 5};
		Console.Write("Input  : ");
		for(int i=0;i<a.Length;i++){
		    Console.Write("{0} ",a[i]);
		}
		Console.WriteLine(" ");
		Console.WriteLine("Output : {0}",maxSumOfAContiguousSubArray(a));
	}
}