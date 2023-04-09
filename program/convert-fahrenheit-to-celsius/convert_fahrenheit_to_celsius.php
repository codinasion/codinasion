<?php

function fahrenheit2Celsius($fahrenheit) {
    return round(($fahrenheit - 32) * 5/9, 2);
}

echo fahrenheit2Celsius(-40);

?>
