import java.util.Scanner;
public class ConvertAStringToAnInteger {

	public static void main(String[] args)
	{
		Scanner sc = new Scanner(System.in);
		try{
		    System.out.print("Enter the string that needs to be converted to INT: ");
		    String string = sc.nextLine();
		    sc.close();
		    Integer intVal = Integer.valueOf(string);
		    System.out.print("Value converted is: " + intVal);

		}catch(Exception e){
		    System.out.println("Invalid input: " + e);
		}
	}
}
