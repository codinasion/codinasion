<?php

function twelveHourFormat($time) {
 $date = new DateTime($time);
 return $date->format('h:i:s A') ;
}

echo twelveHourFormat('12:05:45');

?>
