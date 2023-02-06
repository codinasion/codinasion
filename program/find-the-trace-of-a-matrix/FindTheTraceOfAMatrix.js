import * as readLine from 'readline';

let arr = [];

const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

const takeInput = () => {
    rl.question('', line => {
        if(line.length == 0) {
            rl.close();
            console.log(findTrace(arr));
            return;
        }
        let row = line.split(' ');
        arr.push(row);
        takeInput();
    });
}

const findTrace = (arr) => {
    let total = 0;
    for(let i = 0; i < arr.length; i++) {
        total+=parseInt(arr[i][i]);
    }
    return total;
}

console.log('Input:');
takeInput();