import java.util.AbstractMap.SimpleEntry;
import java.util.Scanner;
import java.util.Map;
import java.util.stream.Collectors;
import java.util.stream.Stream;

/**
 *
 * @author pc
 */
public class ConversationToBinAndDec {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        // TODO code application logic here
        Scanner sc= new Scanner(System.in);    //System.in is a standard input stream  
        System.out.print("Enter decimal number- ");  
        int a= sc.nextInt();  
        System.out.println(dectobin(a));

    }

    public static String dectobin(int m) {
        String s = "";
        while (m > 0) {
            s = String.valueOf(m % 2) + s;
            m = m / 2;
        }
        return s;
    }


    static Map<Integer, String> map = Stream
                                      .of(new SimpleEntry<>(10, "A"), new SimpleEntry<>(11, "B"), new SimpleEntry<>(12, "C"),
                                          new SimpleEntry<>(13, "D"), new SimpleEntry<>(14, "E"), new SimpleEntry<>(15, "F"))
                                      .collect(Collectors.toMap(SimpleEntry::getKey, SimpleEntry::getValue));
}
