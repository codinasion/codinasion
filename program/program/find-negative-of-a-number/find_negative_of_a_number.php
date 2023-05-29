<?php

declare(strict_types=1);
printf("Input a number: ");
$fin = fopen("php://stdin", "r");
$line = fgets($fin);
printf("Output: %d\n", -intval($line));
