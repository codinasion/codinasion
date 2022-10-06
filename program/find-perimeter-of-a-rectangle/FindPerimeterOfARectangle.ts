function FindPerimeterOfARectangle(length: number, width: number) {
    // Perimeter fo rectangle = 2(l*w);

    let perimeter = 2*(length + width);
    return perimeter;
}

console.log("Perimeter of rectangle is ", FindPerimeterOfARectangle(5, 2)+"cm");
