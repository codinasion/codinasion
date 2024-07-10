<?php
    // 1 mile = 5280 feet  

    // take input
    $m = (float)readline("Enter distance in miles: ");

    function convert($miles){
        return $miles*5280;
    }

    echo convert($m) . " feet";

?>