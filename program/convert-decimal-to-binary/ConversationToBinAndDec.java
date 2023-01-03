
import java.util.AbstractMap.SimpleEntry;

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
//	public static void main(String[] args) {
//		// TODO code application logic here
//		// System.out.println(dectoHex(16));
//
//	}

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
