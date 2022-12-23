-- Inches to feet with integer result
inchesToFeet:: Int -> Int
inchesToFeet i = div i 12 

-- Inches to feet with float result
inchesToFeetFloat :: Int -> Float
inchesToFeetFloat i = fromIntegral i / 12
