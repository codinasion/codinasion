-- Define a function to calculate the sum of squares
sumOfSquares :: [Int] -> Int
sumOfSquares [] = 0
sumOfSquares (x:xs) = x^2 + sumOfSquares xs

-- Main function to read input and print output
main :: IO ()
main = do
  putStrLn "Enter a list of numbers separated by spaces:"
  input <- getLine
  let numbers = map read (words input) :: [Int]
  let result = sumOfSquares numbers
  putStrLn $ "Sum of squares: " ++ show result