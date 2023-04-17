let volumeOfCone radius height : float =
  0.33 * 3.14 * radius * radius * height

let cone = volumeOfCone 2.0 3.0

printfn "Volume of cone : %f" cone
