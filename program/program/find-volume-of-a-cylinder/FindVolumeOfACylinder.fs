let cylinderVolume radius length : float =
   let pi = 3.14159
   length * pi * radius * radius

let volume = cylinderVolume 2.0 3.0

printfn "Volume of Cylinder : %f" volume
