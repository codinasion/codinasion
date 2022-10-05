function FindAverageOfNumbers(arr :number[]): number {  //average function definition
    
    let sum:number = 0;
    let i:number = 0;
    while(i<arr.length){                //calculating sum of the array
        sum += arr[i];
        i++;
    }

    return sum / arr.length;             //returning average by dividing sum by number of elements

}


let arr: number[] = [3, 4, 5, 9, 10, 11, 6];

console.log(FindAverageOfNumbers(arr));   // 6.857142

arr = [1, 2, 3];

console.log(FindAverageOfNumbers(arr));   // 2  
