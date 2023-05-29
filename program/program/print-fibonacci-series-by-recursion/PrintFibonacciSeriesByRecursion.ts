function getFiboNumber(n: number): number{
    if(n <= 1){
        return n;
    } else {
        return getFiboNumber(n-1) + getFiboNumber(n-2);
    }
}

const input: number = 5;
let output: string = '';
for(let i=0; i < input; i++){
    output = output + " " + getFiboNumber(i);
}
console.log(output);