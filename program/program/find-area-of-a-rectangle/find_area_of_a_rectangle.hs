main :: IO ()
main = do 
     putStrLn "Enter length: " 
     input1 <- getLine
     let length = read input1 :: Float

     putStrLn "Enter width: " 
     input2 <- getLine
     let width = read input2 :: Float

     let area = length * width
     putStrLn $ show (area)
