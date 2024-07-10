const S = [1, 2, 3, 4, 5]
target = 56

const search = linear_search(S, target)

console.log(search)

function linear_search(seq, target) {
      for (let i in seq) {
            if (seq[i] == target) return i
      }

      return -1
}