main :: IO ()
main = do 
    putStrLn "Enter side: " 
    input1 <- getLine
    let side = read input1 :: Float
    
    let surfaceArea = 6 * side * side
    putStrLn $ show (surfaceArea)
