function maximumContiguousSum(arr: number[]): number {

    let sum:number = 0;
    let i:number = 0;
    let maxsum:number = -Infinity;

    while(i<arr.length){
        sum += arr[i];
        maxsum = Math.max(maxsum,sum);
        if(sum < 0){
            sum = 0;
        }
        i++;
    }

    return maxsum;
}


let arr:number[] = [-2, -3, 4, -1, -2, 1, 5, -3];
console.log(maximumContiguousSum(arr));   //7
