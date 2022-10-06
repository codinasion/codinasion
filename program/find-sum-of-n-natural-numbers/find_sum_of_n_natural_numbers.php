<?php

function find_sum_of_n_natural_numbers($n)
{
	return $n * ($n + 1) / 2;
}

echo find_sum_of_n_natural_numbers(5);
