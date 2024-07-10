main :: IO ()
main = do 
    putStrLn "Enter side: " 
    input1 <- getLine
    let radius = read input1 :: Float
    
    let surfaceArea = 4 * pi * radius * radius
    putStrLn $ show (surfaceArea)
