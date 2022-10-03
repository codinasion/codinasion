import java.util.Scanner;

class StringReverse {
    void reverse(String str) {
        int l = str.length();

        if((str == null) || (l <= 1)) {
            System.out.print(str);
        }
        else {
            System.out.print(str.charAt(l - 1));
            reverse(str.substring(0, l - 1));
        }
    }

    public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
        System.out.print("Enter a string: ");
        String str = sc.nextLine();
        System.out.println(str);
        System.out.print("Reverse of the string: ");
        StringReverse sr = new StringReverse();
        sr.reverse(str);
	}
}

Output :- 
Enter a string: program
Reverse of the string: margorp
