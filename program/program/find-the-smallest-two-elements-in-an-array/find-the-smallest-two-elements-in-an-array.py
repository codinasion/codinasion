def main():
      """
            Return the two smallest elements from a nonempty Python list (array)
            1. Sort the array
            2. Return the first two elements from the sorted array
            
            Asymptotic analsis
            By sorting the sequence of the elements, elements will be placed next to each other. Therefore
            1. built in function sorted guarantees a worst case running time of O(n log n)
            2. return tuple assignment is in constant time O(1)
            
      """
      seq = [12, 13, 1, 10, 34]                                                # Test with various sequences
      
      smallest, second_smallest = find_two_smallest_elements(seq)             #unpacking tuple
      print(f'Smallest: {smallest} || Second smallest: {second_smallest}')

def find_two_smallest_elements(S):
      S_sorted = sorted(S)
      
      return (S_sorted[0], S_sorted[1])                                       # Return in tuple form

if __name__ == '__main__':
      main()