const flat = function (arr, n) {

    if (n === 0) return arr

   let newArr = []

   for (let val of arr) {
     if (Array.isArray(val)) {
       val.forEach(elem => {newArr.push(elem)})
     } else {
       newArr.push(val)
     }
   }

   return flat(newArr , n - 1)

 }