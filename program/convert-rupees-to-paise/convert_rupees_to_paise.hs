main :: IO ()
main = do 
   putStrLn "Enter rupees: " 
   input1 <- getLine
   let rupees = read input1 :: Float

   let paise = rupees * 100
   putStrLn $ show (paise)
