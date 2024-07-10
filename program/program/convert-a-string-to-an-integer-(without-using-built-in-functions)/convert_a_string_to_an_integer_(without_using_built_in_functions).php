<?php

/**
 * Convert a string to an integer (without using built-in functions)
 *
 * @param string $str
 * @return int
 */

function stringToInt($str) {
    $result = 0;
    $isNegative = false;
    $i = 0;

    // If the first character is a minus sign, set the negative value
    if ($str[0] == '-') {
        $isNegative = true;
        $i = 1;
    }

    // Loop through the string and convert it to integer
    for (; $i < strlen($str); $i++) {
        $char = $str[$i];

        // If the character is a digit, convert it to integer
        if ($char >= '0' && $char <= '9') {
            // Multiply the result by 10 and add the digit
            $result = $result * 10 + (ord($char) - ord('0'));
        } else {
            // If the character is not a digit, break out of the loop
            break;
        }
    }

    // If the number is negative, convert the result to negative
    if ($isNegative) {
        $result = -$result;
    }

    return $result;
}

// Test cases
$string = "2356234";
$integer = stringToInt($string);

echo "String: $string\n";
echo "Integer: $integer\n";
?>
