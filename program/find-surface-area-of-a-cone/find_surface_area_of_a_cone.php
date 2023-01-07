<?php

function surfaceAreaOfCone($radius, $height) {
	return round(pi() * $radius * ($radius + $height), 2);
}

echo surfaceAreaOfCone(2,3)

?>
