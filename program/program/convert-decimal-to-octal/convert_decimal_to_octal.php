<?php
    echo "Enter a decimal number: ";
    $decimal_number = trim(fgets(STDIN)); // Get the decimal number input by the user
    $octal_number = decoct($decimal_number); // Convert the decimal number to octal
        
    echo "The octal equivalent of $decimal_number is: $octal_number";
?>