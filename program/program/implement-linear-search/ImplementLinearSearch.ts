
console.log(LinearSearch([6, 56, 98, 12], 98))

function LinearSearch(sequence: number[], target: number): number {
      for (let j=0; j < sequence.length; j++) {
            if (sequence[j] == target) {
                  return j;               // Target found !
            }
      }
      return -1;                          // Target not found                      
}

