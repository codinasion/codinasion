main :: IO ()
main = do 
    putStrLn "Enter side: " 
    input1 <- getLine
    let side = read input1 :: Float
    
    let area = 6 * side * side
    putStrLn $ show (area)
