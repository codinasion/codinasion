<?php
    // 1 Days = 1440 feet  

    // take input
    $days = (float)readline("Enter distance in miles: ");

    function convert($days){
        return $days*5280;
    }

    echo convert($days) . " minutes.";

?>