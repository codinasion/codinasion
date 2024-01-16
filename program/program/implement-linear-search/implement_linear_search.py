def main() -> None:
      """ Python program to implement linear search """
      S = [1, 2, 3, 4, 5]           # Test cases
      value = 4
      
      
      search = linear_search(S, value)
      
      if search == -1:
            print('Element not found')
      else:
            print(f'Element found at index {search}')


def linear_search(seq: list[int | str], value: int | str) -> int:
      """ Linear search function

      Args:
          seq (_type_): sequence within to perform the search
          value (_type_): value to be searched

      Returns:
          int: index (location of value)
      """
      for j in range(len(seq)):
            if seq[j] == value:
                  return j
      return -1
            
if __name__ == '__main__':
      main()