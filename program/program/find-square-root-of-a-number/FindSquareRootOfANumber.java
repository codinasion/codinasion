
// LNpue Number £5 ---F? 45
import java.util.*;

class FindSquareRootOfANumber {

    public static void main(String[] args) {

        int n;

        System.out.print("Enter a number: ");
        Scanner r = new Scanner(System.in);
        n = r.nextInt();
        r.close();

        double m =  Math.sqrt(n);
        System.out.println("The square root of " + n + " is " + m);

    }
}
