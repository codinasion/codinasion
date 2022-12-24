-- Inches to feet with integer result
inchesToFeet:: Int -> Int
inchesToFeet i = div i 12 

-- Inches to feet with float result
inchesToFeetFloat :: Int -> Float
inchesToFeetFloat i = fromIntegral i / 12

main :: IO ()
main = do
  -- Convert 12 inches to feet
  let feet = inchesToFeet 12
  -- Convert 12 inches to feet (float result)
  let feetFloat = inchesToFeetFloat 12
  -- Print the results
  putStrLn $ "12 inches is equivalent to " ++ show feet ++ " feet (integer result)."
  putStrLn $ "12 inches is equivalent to " ++ show feetFloat ++ " feet (float result)."
