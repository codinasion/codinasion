f :: Integer -> [Integer]
f 0 = []
f x = (x `mod` 10) : f (x `div` 10)

main :: IO()
main =  do
    let n = 123
    let r = concat . map show $ f n
    
    putStrLn r