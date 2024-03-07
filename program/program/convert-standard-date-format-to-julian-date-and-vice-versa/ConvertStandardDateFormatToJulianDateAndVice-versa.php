<?php

function toJulianDate($year, $month, $day) {

    $startOfYear = new DateTime("$year-01-01");
    $currentDate = new DateTime("$year-$month-$day");
    $difference = $startOfYear->diff($currentDate);
    return sprintf('%d%03d', $year, $difference->days + 1);
}

function fromJulianDate($julianDate) {
    $year = substr($julianDate, 0, 4);
    $days = intval(substr($julianDate, 4)) - 1;
    $date = new DateTime("$year-01-01");
    $date->add(new DateInterval("P{$days}D"));
    return $date->format('Y-m-d');
}


$standardDate = "2023-06-10";
list($year, $month, $day) = explode('-', $standardDate);
$julianDate = toJulianDate($year, $month, $day);
echo "Standard date: $standardDate\n";
echo "Julian date: $julianDate\n";


$convertedDate = fromJulianDate($julianDate);
echo "Converted back to standard date: $convertedDate\n";

?>
