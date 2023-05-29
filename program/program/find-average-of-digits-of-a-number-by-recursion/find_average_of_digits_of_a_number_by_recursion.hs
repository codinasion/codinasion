f :: Integer -> [Integer]
f 0 = []
f x = (x `mod` 10) : f (x `div` 10)

main :: IO()
main =  do
    let n = 123
    let d = f n
    let a = (fromIntegral $ foldl (+) 0 d) / fromIntegral (length d)
    
    print a