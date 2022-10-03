import java.util.Scanner;

class Conversion {
    int binaryToDecimal(long binary) {
        int dec = 0, i = 0;

        while(binary > 0) {
            dec += Math.pow(2, i++) * (binary % 10);
            binary /= 10;
        }

        return dec;
    }

    int decimalToOctal(long binary) {
        int dec = binaryToDecimal(binary);
        String octString = Integer.toOctalString(dec);
        int oct = Integer.parseInt(octString);
        return oct;
    }

    public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
        System.out.print("Enter a Binary Number: ");
        int i = sc.nextInt();
        System.out.println(i);
        System.out.print("Octal Number: ");
        Conversion c = new Conversion();
        System.out.print(c.decimalToOctal(i));
	}
}

Output :-
Enter a Binary Number: 1010
Octal Number: 12