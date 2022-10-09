function linearSearch(arr,target){   //linear search function
    let i = 0;                      //returns element index
    while(i<arr.length){
        if(arr[i] === target){
            return i;
        }
        i++;
    }
    return -1;          //returns -1 if element not found
}



let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let target = 5;
console.log(linearSearch(arr,target));     // 4
