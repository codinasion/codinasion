<?php

    echo "Output :\n\n";

    $rows = 5;

    for ($i = 0; $i < $rows; $i++) {
        $num = 1;
        
        for ($j = $rows; $j > $i; $j--) {
            // Adds spacing around the triangle to get a nice visual representation
            echo " ";
        }

        for ($k = 0; $k <= $i; $k++) {
            echo "$num";

            if ($k < $i) {
                // Adds spacing around the triangle to get a nice visual representation
                echo " ";
            }
            $num = $num * ($i - $k) / ($k + 1);
        }
        
        echo "\n";
    }
?>
