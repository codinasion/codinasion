<?php

function multiplicationTable($n)
{
    for ($i = 1; $i <= 10; $i++) {
        echo "$n * $i = " . $n * $i . "\n";
    }
}

$n = (int) readline();
multiplicationTable($n);

?>
