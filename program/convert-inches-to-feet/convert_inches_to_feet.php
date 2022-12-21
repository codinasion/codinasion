<?php

function inchesToFeet($inch){
  return round($inch/12, 2);
}

echo(inchesToFeet(60));

?>
