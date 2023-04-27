main :: IO ()
main = do 
    putStrLn "Enter side: " 
    input1 <- getLine
    let radius = read input1 :: Float
    
    putStrLn "Enter height: " 
    input2 <- getLine
    let height = read input2 :: Float
    
    let surfaceArea = 2 * pi * radius * (radius + height) 
    putStrLn $ show (surfaceArea)
