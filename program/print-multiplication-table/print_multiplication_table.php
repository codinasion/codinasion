<?php

function multiplicationTable($n) {
$start = 1;
$end = 10;
for($i = $start; $i <= $end; $i++)
{
echo nl2br(("$n * $i = ".$n * $i )." \r\n ");
}
return 0;
}

multiplicationTable(2)

?>
