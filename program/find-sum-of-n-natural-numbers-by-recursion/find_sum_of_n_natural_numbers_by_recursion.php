<!-- issue #2835 -->
<?php
function Sum($n)
{
if ($n <= 1)
return $n;
return $n + Sum ($n - 1 );
}

// enter the range in the sum function 
echo Sum(5)
?>