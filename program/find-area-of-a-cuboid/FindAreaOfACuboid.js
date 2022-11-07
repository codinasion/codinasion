function cuboidArea(Length,Width,Height){    //Cuboid Area function
    return 2 * (Length * Width + Length * Height + Width * Height);
}

let Length = 2;
let Width = 3;
let Height = 4;
console.log(cuboidArea(Length,Width,Height));   //52
