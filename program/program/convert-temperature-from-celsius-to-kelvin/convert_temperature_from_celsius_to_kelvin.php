<?php
function celsiusToKelvin($celsius) {
  return $celsius + 273.15;
}

function main() {
  $celsius = -40;
  $kelvin = celsiusToKelvin($celsius);

  echo "Input (C): $celsius\n";
  echo "Output (K): $kelvin";
}

main();
?>
