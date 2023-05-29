import java.util.*;
class CheckConsonant
{
  public static boolean isConsonant(char c)
  {
    if((c>='a'&&c<='z')||(c>='A'&&c<='Z'))
    {
      if(c=='A'||c=='E'||c=='I'||c=='O'||c=='U'||c=='a'||c=='e'||c=='i'||c=='o'||c=='u')
         return false;
      return true;
    }  
    
     return false;
  }
  public static void main(String args[]) 
  {
    Scanner sc=new Scanner(System.in);
    System.out.println("Enter character ");
    char c=sc.nextLine().charAt(0);
    if(isConsonant(c))
      System.out.println("Consonant");
    else
      System.out.println("Not a Consonant");
  }
}