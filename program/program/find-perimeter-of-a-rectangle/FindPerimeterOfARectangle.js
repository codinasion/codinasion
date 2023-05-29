function FindPerimeterOfARectangle(length, width) {
    // Perimeter fo rectangle = 2(l*w);

    let permiter = 2*(length + width);
    return permiter;
}

console.log("Perimeter of rectangle is ", FindPerimeterOfARectangle(5, 2)+"cm");
