public class ConvertAStringToAnInteger {

//Driven Code
        public static void main(String args[]) {

            // Given string of number

            String convertingString = "123456";
            System.out.println("String Before Conversion :  " + convertingString);
            int output = stringToint(convertingString);    // Function Call
            System.out.println("int value as output " + output); // Print the answer

        }


        public static int stringToint(String str) {
            int i = 0, number = 0;              // Initialize a variable
            boolean isNegative = false;
            int len = str.length();
            if (str.charAt(0) == '-') {         //checking string
                isNegative = true;
                i = 1;
            }
            while (i < len) {                 // Iterate till length of the string
                number *= 10;
                number += (str.charAt(i++) - '0');
            }
            if (isNegative)
                number = -number;
            return number;
        }
    }

