function jumpSearch(arr, a) {
    const n = arr.length;
    let blockSize = Math.floor(Math.sqrt(n));
    let prev = 0;

    while (arr[Math.min(blockSize, n) - 1] < a) {
        prev = blockSize;
        blockSize += Math.floor(Math.sqrt(n));

        if (prev >= n) {
            return -1; 
        }
    }

    while (arr[prev] < a) {
        prev++;
        if (prev === Math.min(blockSize, n)) {
            return -1;
        }
    }

    if (arr[prev] === a) {
        return prev;
    }

    return -1;
}

const input = [1, 2, 3, 4, 5];
const search = 4;
const res = jumpSearch(input, search);

if (res !== -1) {
    console.log(`Element ${search} found at index ${res}`);
} else {
    console.log(`Element ${search} not found`);
}
