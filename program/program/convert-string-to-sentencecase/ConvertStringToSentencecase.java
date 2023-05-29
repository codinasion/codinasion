import java.util.Scanner;


public class ConvertStringToSentencecase {
    
    public static void main(String[] args) {

        Scanner scnr = new Scanner(System.in); 
        System.out.println("Enter the String"); 
        String inputString = scnr.nextLine();

        String s1 = inputString.substring(0, 1).toUpperCase();  
        String s2 = inputString.substring(1);    
        String sentence = inputString.substring(0, 1).toUpperCase() + inputString.substring(1); 
        System.out.println(sentence);
    }
}
