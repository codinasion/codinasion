function surfaceArea(radius, height) {
	//formular for surface area
	area = 2 * Math.PI * radius * (radius + height);
	return area;
}

//display surface area when radius =2 and height = 3
console.log(surfaceArea(2, 3));
