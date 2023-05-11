main :: IO ()
main = do 
    putStrLn "Enter length: " 
    input1 <- getLine
    let length = read input1 :: Float
    
    putStrLn "Enter width: " 
    input2 <- getLine
    let width = read input2 :: Float
    
    putStrLn "Enter height: " 
    input3 <- getLine
    let height = read input3 :: Float
    
    let surfaceArea = 2 * (length * width + length * height + width * height)
    putStrLn $ show (surfaceArea)
