let surfaceAreaOfCuboid length width height : int =
   2 * ((length * width) + (length * height) + (width * height))

let cuboid = surfaceAreaOfCuboid 2 3 4

printfn "Surface area of cuboid: %d" cuboid
