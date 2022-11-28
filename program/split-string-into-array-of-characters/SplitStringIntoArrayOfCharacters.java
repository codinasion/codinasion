import java.util.*;


class SplitStringintoArrayofCharacters{
	public static void main(String[] args){

		Scanner sc = new Scanner(System.in);
		String s;
		System.out.print("Input : ");

		s = sc.nextLine();
		int n = s.length();
		char[] arr = new char[n];
		for (int i=0;i<n;i++){
			arr[i] = s.charAt(i);
			
		}

		System.out.print("\nOutput : [");
		for (int i=0;i<n;i++){
			System.out.print('"'+""+arr[i]+""+'"');
			if (i!= n-1) System.out.print(", ");
		}
		System.out.print("]\n");
	}

}