
import java.util.AbstractMap.SimpleEntry;

import java.util.Map;
import java.util.stream.Collectors;
import java.util.stream.Stream;

public class ConversationDecTohex {

public static String dectoHex(int m) {
	String s = "";
	while (m > 0) {
		int rest = m % 16;
		if (rest < 10) {
			s = String.valueOf(rest) + s;
		} else {
			s = map.get(rest) + s;
		}
		m = m / 16;
	}
	return s;
}

static Map<Integer, String> map = Stream
		.of(new SimpleEntry<>(10, "A"), new SimpleEntry<>(11, "B"), new SimpleEntry<>(12, "C"),
				new SimpleEntry<>(13, "D"), new SimpleEntry<>(14, "E"), new SimpleEntry<>(15, "F"))
		.collect(Collectors.toMap(SimpleEntry::getKey, SimpleEntry::getValue));
}
