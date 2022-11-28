const input = 5;

for(let i = 1; i <= input; i++) {
    for(let k = 1; k<=i; k++) {
        process.stdout.write(k.toString() + ' ');
    }
    console.log('')
}
