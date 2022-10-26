import java.util.Scanner;
class StringToSnakecase
{
	public static void main(String []args)
	{
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter your word: ");
        String x = "";
        x+=sc.nextLine();
        sc.close();
        
        StringBuilder string = new StringBuilder(x);
        
        for (int i = 0; i < string.length(); ++i) {
            if (string.charAt(i) == ' ' && i < string.length() - 1)
                string.setCharAt(i,'_');
            }
        System.out.println(string);
    }
}