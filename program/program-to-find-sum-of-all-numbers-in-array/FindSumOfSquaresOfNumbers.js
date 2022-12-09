let n=prompt("input the number")
let b=[];
let count=0;
for(let i=0;i<n;i++){
    b.push(Number(prompt("Number please")))

    count=count+(b[i]*b[i]);
}
console.log(count)