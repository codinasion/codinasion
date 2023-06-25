// F# program to find roots of quadratic equation using the quadratic formula.

let findRoots (a:float, b:float, c:float) =
    let disc = b * b - 4.0 * a * c // Calculate the discriminant
    if disc < 0.0 then
        None // No real roots
    else
        let sqrtDisc = sqrt disc // Calculate the square root of the discriminant
        let root1 = (-b + sqrtDisc) / (2.0 * a) // Calculate the first root
        let root2 = (-b - sqrtDisc) / (2.0 * a) // Calculate the second root
        Some (root1, root2) // Return the roots as Some tuple

let a = 1
let b = 2
let c = 1

// Call the findRoots function with the coefficients and pattern match the result
match findRoots (a, b, c) with
| None -> printfn "No real roots" // If there are no real roots, print the message
| Some (root1, root2) -> printfn "%.0f %.0f" root1 root2 // Print the roots as integers
