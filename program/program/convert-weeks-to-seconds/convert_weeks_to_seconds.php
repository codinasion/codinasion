<?php

    // Write a PHP program to convert weeks to seconds

    // 1 week = 7 days = 168 hours = 10080 minutes = 604800 seconds
    
    // Input  : 5
    // Output : 3024000

    // take input
    $weeks = (float)readline("Enter distance in miles: ");

    function convert($weeks){
        return $weeks*604800;
    }

    echo convert($weeks) . " Seconds";

?>


// contributed by Technical Amanjeet 
