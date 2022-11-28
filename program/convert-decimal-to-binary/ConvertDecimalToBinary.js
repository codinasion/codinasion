

// Javascript program to convert a decimal

// function to convert decimal to binary
function decToBinary(n)
{
	// array to store binary number
	let binaryNum = new Array(32);

	// counter for binary array
	let i = 0;
	while (n > 0) {

		// storing remainder in binary array
		binaryNum[i] = n % 2;
		n = Math.floor(n / 2);
		i++;
	}

	// printing binary array in reverse order
	for (let j = i - 1; j >= 0; j--)
		document.write(binaryNum[j]);
}

// Driver program to test above function
	let n = 10;
	decToBinary(n);
	

