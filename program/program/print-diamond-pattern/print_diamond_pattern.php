<?php

function diamondPattern($n) {
echo "<pre>";
for ($i = 1; $i < $n; $i++) {
    for ($j = $i; $j < $n; $j++)
        echo "&nbsp;&nbsp;";
    for ($j = 2 * $i - 1; $j > 0; $j--)
        echo ("&nbsp;*");
    echo "<br>";
}

for ($i = $n; $i > 0; $i--) {
    for ($j = $n - $i; $j > 0; $j--)
        echo "&nbsp;&nbsp;";
    for ($j = 2 * $i - 1; $j > 0; $j--)
        echo ("&nbsp;*");
    echo "<br>";
}
echo "</pre>";
}

diamondPattern(5);

?>
