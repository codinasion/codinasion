main :: IO ()
main = do 
    putStrLn "Enter side: " 
    input1 <- getLine
    let radius = read input1 :: Float
    
    putStrLn "Enter slantHeight: " 
    input2 <- getLine
    let slantHeight = read input2 :: Float
    
    let surfaceArea = pi * radius * (radius + slantHeight) 
    putStrLn $ show (surfaceArea)
