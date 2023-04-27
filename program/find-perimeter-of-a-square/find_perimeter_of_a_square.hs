main :: IO ()
main = do 
     putStrLn "Enter side: " 
     input1 <- getLine
     let side = read input1 :: Float

     let perimeter = 4 * side
     putStrLn $ show (perimeter)
