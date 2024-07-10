// Define a function to calculate the trace of a square matrix
let trace (matrix: int[,]) =
    // Get the size of the matrix
    let size = matrix.GetLength(0)
    // Initialize the sum to zero
    let mutable sum = 0
    // Loop through the diagonal elements
    for i in 0 .. size - 1 do
        // Add the element to the sum
        sum <- sum + matrix.[i, i]
    // Return the sum
    sum

// Define a sample matrix
let matrix = array2D [[1; 2; 3]; [4; 5; 6]; [7; 8; 9]]

// Print the matrix
printfn "Input:\n%A" matrix

// Call the trace function and print the result
printfn "Output:\n%d" (trace matrix)
