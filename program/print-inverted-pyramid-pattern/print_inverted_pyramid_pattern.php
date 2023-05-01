<?php
    // The for loop is used to echo the inverted pyramid.
    // The if statement is purely to let a user put in a value of choice

    // In the for loop I use $i as the index, the value of $i is the user input. As long as $i is bigger than 0 it will substract 1 from the value of $i
    for ($i = 5; $i > 0; $i--) {

        // In the for loop I use $j as the index.
        // $j has a base value of 1. As long as $j is smaller or equal to $i it will add 1 to the base value of $j.
        for ($j = 1; $j <= $i; $j++) {

            // Here $j will be outputting the number 1 (Base value of $j) to the number that is the base value of $i
            echo "$j ";
        }

        // The echo "<br>" is used to put everything on seperated lines
        echo "\n";
    }

?>
