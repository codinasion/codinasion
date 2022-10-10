import java.util.*;

class CheckDigit{
    public static void main(String[] args){

        Scanner sc = new Scnner(System.in);
        System.out.println("Enter a charcter");
        char ch = sc.nextLine();
        if (ch >= '0' & ch <= '9'){
            System.out.println("Digit");
        }else{
            System.out.println("Not a Digit");
        }
    }
}