<?php
function checkDigit($digits) {
    if (ctype_digit($digits)) {
        echo "Digit\n";
    } else {
        echo "Not a digit\n";
    }
}
checkDigit('1')
?>
