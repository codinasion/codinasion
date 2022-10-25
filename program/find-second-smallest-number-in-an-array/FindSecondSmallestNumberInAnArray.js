/* Problem: Write a JavaScript program to find second smallest number in an array 

nums = [1, 2, 3, 4, 5]
output = 2

nums = [55, 3, 1, -4, 109, 7]
output = 1

Brute Force
- use array sort method that returns an array in increasing order
- return the element at the 1st index (second smallest) 

Pseudocode
- edge case: if input array is empty we return 0
- manually sort input array in ascending order
- return element at 1st index

Time: O(n log n) for manually sorting the input array
Space: O(1) no extra memory needed 

===

Better Approach 
- perform 2 loops over input array where we check for the first smallest and second smallest numbers
- key is to initialize the smallest numbers as Infinity so any number we get from array will become smaller than Infinity

Pseudocode
- edge case: if input array is empty we return 0
- initialize firstSmallest as Infinity 
- initialize secondSmallest as Infinity
- iterate over input array once 
- check: if current element is smaller than firstSmallest ? 
-- set firstSmallest as current element
- iterate over input array again 
- check: if current element is smaller than secondSmallest && current element is greater than firstSmallest ? 
-- set secondSmallest as current element 
- return secondSmallest 

Time: O(n) we iterate over input array twice at O(2n) -> O(n)
Space: O(1) no extra memory needed 

*/ 

// function findSecondSmallestNumberInAnArray(nums) {
//     // edge case: if input array is empty we return 0
//     if(nums.length === 0) return 0; 
//     nums.sort((a, b) => a - b); 
//     return nums[1]; 
// };

function findSecondSmallestNumberInAnArray(nums) {
    if(nums.length === 0) return 0; 
    let firstSmallest = Infinity; 
    let secondSmallest = Infinity; 
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] < firstSmallest) {
            firstSmallest = nums[i]; 
        }; 
    }; 
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] < secondSmallest && nums[i] > firstSmallest) {
            secondSmallest = nums[i]; 
        }; 
    };
    return secondSmallest;
};

console.log(findSecondSmallestNumberInAnArray([1,2,3,4,5])); 