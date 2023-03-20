#include <iostream> // cout,cin 
#include <vector> // vector 

//wrapper for FindSumOfSquaresRec
int FindSumOfSquares(std::vector<int>& nums);
// Find a square of numbers by recursion
int FindSumOfSquaresRec(std::vector<int>& nums,size_t idx);

int main()
{
    size_t size = 0;

    std::cout << "please enter the size of the array:" << std::endl;
    std::cin >> size;

    std::cout << "please enter elements of the array in ascending order:" << std::endl;

    int tmp = 0;
    std::vector<int> nums;
    
    for(size_t i = 0; i < size; ++i)
    {
        std::cin >> tmp;
        nums.push_back(tmp);
    }

    std::cout << FindSumOfSquares(nums) << std::endl;

    return 0;
}

int FindSumOfSquares(std::vector<int>& nums)
{
    return FindSumOfSquaresRec(nums,nums.size() - 1);
}


int FindSumOfSquaresRec(std::vector<int>& nums,size_t idx)
{
    if(idx == 0)
    {
        return nums[idx] * nums[idx];
    }

    int square_of = nums[idx] * nums[idx];

    return square_of + FindSumOfSquaresRec(nums,idx - 1);
}