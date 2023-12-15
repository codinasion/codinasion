main :: IO ()
main = do
    putStrLn "Enter the 3x3 matrix elements separated by spaces:"
    matrix <- readMatrix
    let traceValue = trace matrix
    putStrLn $ "Trace of the matrix is: " ++ show traceValue

readMatrix :: IO [[Int]]
readMatrix = sequence $ replicate 3 readRow

readRow :: IO [Int]
readRow = map read . words <$> getLine

trace :: [[Int]] -> Int
trace matrix = sum $ zipWith (!!) matrix [0..]
