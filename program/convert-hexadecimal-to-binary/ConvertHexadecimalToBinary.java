import java.util.Scanner;
class ConvertHexadecimalToBinary {
	
	
	// HexaDecimal to Decimal Conversion
	static String convertHexaDecimalToBinary(String hexadecimal) {
		
		char character;
		int decimal;
		String binary = "";
		
		for(int i = 0; i < hexadecimal.length(); i++) {
			character = hexadecimal.charAt(i);
			if (Character.isDigit(character) == false && ((int)character >= 65 && (int)character <= 70) == false) {
                binary = "Please enter valid hexadecimal string";
                return binary;
            }
			
            else if ((int)character >= 65 && (int)character <= 70)
                decimal = (int)character - 55;
            
			else
                decimal = Integer.parseInt(String.valueOf(character));
				
			binary += convertDecimalToBinary(decimal);
				
		}
		return binary;
		
	}
	
	// Decimal to Binary Conversion
	static String convertDecimalToBinary(int decimal) {
		String binary = "";
		while(decimal != 0) {
			binary = (decimal % 2) + binary;
			decimal /= 2;
		}
		while(binary.length() % 4 != 0) {
			binary = "0" + binary;
		}
		return binary;
	}
	
	public static void main(String[] args) {
		
		Scanner input = new Scanner(System.in);
		System.out.println("Enter a hexadecimal string: ");
		
		String hexadecimal = input.nextLine().toUpperCase();
		System.out.print(convertHexaDecimalToBinary(hexadecimal));
		
	}
}