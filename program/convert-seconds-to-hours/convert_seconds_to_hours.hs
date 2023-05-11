main :: IO ()
main = do 
   putStrLn "Enter seconds: " 
   input1 <- getLine
   let seconds = read input1 :: Float

   let hours = seconds / 3600
   putStrLn $ show (hours)
