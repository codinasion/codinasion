// Average of numbers is the sum of all numbers divided by the number of numbers

function average(nums) {
    return nums.reduce((a, b) => a + b) / nums.length;
};

const list = [1, 2, 3, 4, 5];
console.log(average(list));