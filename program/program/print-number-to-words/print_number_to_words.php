<?php
function numberToWords($number) {
    $ones = array(
        0 => '',
        1 => 'One',
        2 => 'Two',
        3 => 'Three',
        4 => 'Four',
        5 => 'Five',
        6 => 'Six',
        7 => 'Seven',
        8 => 'Eight',
        9 => 'Nine',
        10 => 'Ten',
        11 => 'Eleven',
        12 => 'Twelve',
        13 => 'Thirteen',
        14 => 'Fourteen',
        15 => 'Fifteen',
        16 => 'Sixteen',
        17 => 'Seventeen',
        18 => 'Eighteen',
        19 => 'Nineteen'
    );
    $tens = array(
        2 => 'Twenty',
        3 => 'Thirty',
        4 => 'Forty',
        5 => 'Fifty',
        6 => 'Sixty',
        7 => 'Seventy',
        8 => 'Eighty',
        9 => 'Ninety'
    );
    
    if ($number == 0) {
        return 'Zero';
    }
    
    $words = '';
    
    if ($number < 0) {
        $words .= 'Negative ';
        $number = abs($number);
    }
    
    if ($number < 20) {
        $words .= $ones[$number];
    } elseif ($number < 100) {
        $words .= $tens[floor($number / 10)];
        $remainder = $number % 10;
        if ($remainder > 0) {
            $words .= ' ' . $ones[$remainder];
        }
    } elseif ($number < 1000) {
        $words .= $ones[floor($number / 100)] . ' Hundred';
        $remainder = $number % 100;
        if ($remainder > 0) {
            $words .= ' ' . numberToWords($remainder);
        }
    } elseif ($number < 1000000) {
        $words .= numberToWords(floor($number / 1000)) . ' Thousand';
        $remainder = $number % 1000;
        if ($remainder > 0) {
            $words .= ' ' . numberToWords($remainder);
        }
    } elseif ($number < 1000000000) {
        $words .= numberToWords(floor($number / 1000000)) . ' Million';
        $remainder = $number % 1000000;
        if ($remainder > 0) {
            $words .= ' ' . numberToWords($remainder);
        }
    } else {
        $words .= numberToWords(floor($number / 1000000000)) . ' Billion';
        $remainder = $number % 1000000000;
        if ($remainder > 0) {
            $words .= ' ' . numberToWords($remainder);
        }
    }
    
    return $words;
}

//test
$number = 123456789;
$result = numberToWords($number);
echo "Input : $number\n";
echo "Output: $result\n";
?>
