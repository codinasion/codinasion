<?php
// variables
$day = 0;
$month = 0;
$year = 0;

// turn yyyy-mm-dd into variables
if (isset($_GET['date'])) {
    $date = $_GET['date'];
    $date = explode('-', $date);
    $year = $date[0];
    $month = $date[1];
    $day = $date[2];
}

//if month is valid
if ($month > 0 && $month < 13) {
    // if day is valid
    if ($day > 0 && $day < 32) {
        // if year is valid
        if ($year > 0 && $year < 9999) {
            // if day is valid for month
            if ($month == 2) {
                if ($day < 30 || ($day == 29 && $year % 4 == 0)) {
                    echo 'valid';
                } else {
                    echo 'invalid';
                }
            } else if ($month == 4 || $month == 6 || $month == 9 || $month == 11) {
                if ($day < 31) {
                    echo 'valid';
                } else {
                    echo 'invalid';
                }
            } else {
                echo 'valid';
            }
        } else {
            echo 'invalid';
        }
    } else {
        echo 'invalid';
    }
} else {
    echo 'invalid';
}