main :: IO ()
main = do
    putStrLn "Enter the elements of the first 3x3 matrix separated by spaces:"
    matrix1 <- readMatrix
    putStrLn "Enter the elements of the second 3x3 matrix separated by spaces:"
    matrix2 <- readMatrix
    let resultMatrix = addMatrices matrix1 matrix2
    putStrLn "The sum of the matrices is:"
    printMatrix resultMatrix

readMatrix :: IO [[Int]]
readMatrix = sequence $ replicate 3 readRow

readRow :: IO [Int]
readRow = map read . words <$> getLine

addMatrices :: [[Int]] -> [[Int]] -> [[Int]]
addMatrices mat1 mat2 = zipWith (zipWith (+)) mat1 mat2

printMatrix :: [[Int]] -> IO ()
printMatrix = mapM_ (putStrLn . unwords . map show)
