<?php
function weekendDays($year){
    $weekend = 104;
    return $year * $weekend;
}

echo weekendDays(2)
?>
