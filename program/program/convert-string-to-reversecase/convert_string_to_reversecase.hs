import Data.Char (toUpper, toLower)

reverseCase :: String -> String
reverseCase = map (\c -> if isLower c then toUpper c else toLower c)

isLower :: Char -> Bool
isLower c = c >= 'a' && c <= 'z'

main :: IO ()
main = do
  let inputString = "hello world"
      outputString = reverseCase inputString
  putStrLn $ "Input: " ++ inputString
  putStrLn $ "Output: " ++ outputString
