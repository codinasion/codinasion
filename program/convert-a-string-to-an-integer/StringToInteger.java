import java.util.Scanner;
public class StringToInteger {

	public static void main(String[] args)
	{
	    Scanner sc = new Scanner(System.in);
try{
    System.out.println("Enter the string that needs to be converted to INT");
    String string = sc.nextLine();
    Integer intVal = Integer.valueOf(string);
    System.out.println("value converted is"+intVal);
    
}catch(Exception e){
    System.out.println("Invalid input: "+e);
}
	}
}
