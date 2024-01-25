<?php
// With some help from @sharletk helping me understand the logic behind the indian numbering system https://en.wikipedia.org/wiki/Indian_numbering_system

/**
 * Convert a number to words in Indian numbering system
 *
 * @param int $number
 * @return string
 */

function convertToIndianNumberingSystem($number) {
    // Numbers from 0 to 19 are unique words
    $words = array(
        "Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve",
        "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"
    );

    // Numbers from 20 to 90 are whole words
    $tens = array(
        "", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"
    );

    // Suffixes for the numbers in the Indian numbering system
    $suffix = array(
        "", "Thousand", "Lakh", "Crore", "Arab", "Kharab", "Neel", "Padma", "Shankh"
    );

    // Initialize the number input as an integer
    $num = (int)$number;

    // If the number is 0, return the word Zero
    if ($num == 0) {
        return "Zero";
    }

    // Initialize an array to store the words
    $wordsArr = array();

    // Loop through the number and convert it to words
    while ($num > 0) {

        // Get the last 3 digits of the number
        $crore = $num % 100;
        $num = (int)($num / 100);

        // Get the words for the current set of 3 digits
        if ($crore > 0) {
            $croreWords = "";

            if ($crore < 20) {
                $croreWords = $words[$crore];
            } elseif ($crore >= 20 && $crore < 100) {
                $tensDigit = (int)($crore / 10);
                $onesDigit = $crore % 10;
                $croreWords = $tens[$tensDigit];
                if ($onesDigit > 0) {
                    $croreWords .= " " . $words[$onesDigit];
                }
            }

            $wordsArr[] = $croreWords;
        }

        // Get the suffix for the current set of 3 digits
        $suffixIndex = count($wordsArr) - 1;

        // Get the next set of 3 digits
        if ($num > 0) {
            $wordsArr[] = $suffix[$suffixIndex];
        }
    }

    return implode(" ", array_reverse($wordsArr));
}

$number = 843955235;
$inWords = convertToIndianNumberingSystem($number);

echo "Input: $number\n";
echo "Output: $inWords";
?>
