<?php

function fibonacci($length) {
  $data = [];

  for ($i = 0; $i < $length; $i++) { 
    if ($i === 0) {
      $data[] = 0;
    } else if ($i === 1) {
      $data[] = 1;
    } else {
      $data[] = $data[$i - 1] + $data[$i - 2];
    }
  }

  return implode(" ", $data);
}

echo fibonacci(5);
