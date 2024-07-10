#r "nuget: MathNet.Numerics"

open MathNet.Numerics.LinearAlgebra

// Define a function to calculate eigenvalues
let calculateEigenvalues (matrix : Matrix<float>) =
    // Use the EigenValues method to compute eigenvalues
    let eigenvalues = matrix.Evd().EigenValues

    // Convert the eigenvalues to a list
    eigenvalues.AsArray() |> Array.toList

// Define the input matrix
let inputMatrix = matrix [
    [1.0; 2.0; 3.0];
    [4.0; 5.0; 6.0];
    [7.0; 8.0; 9.0]
]

// Call the function to calculate eigenvalues
let eigenvalues = calculateEigenvalues inputMatrix

// Print the eigenvalues
printfn "Eigenvalues:"
eigenvalues |> List.iter (printfn "%f")
