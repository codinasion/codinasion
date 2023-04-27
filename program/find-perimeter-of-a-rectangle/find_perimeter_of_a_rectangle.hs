main :: IO ()
main = do 
     putStrLn "Enter length: " 
     input1 <- getLine
     let length = read input1 :: Float

     putStrLn "Enter width: " 
     input2 <- getLine
     let width = read input2 :: Float

     let perimeter = 2 * (length + width)
     putStrLn $ show (perimeter)
