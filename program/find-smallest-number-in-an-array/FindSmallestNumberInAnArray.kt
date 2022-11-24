import kotlin.Int;
fun main() {
    val nums = arrayOf(1, 8, 3, 4,2)
    var firstSmallest:Int = Int.MAX_VALUE;
    var secondSmallest:Int = Int.MAX_VALUE;
    for(i in nums.indices) {
        if(nums[i] < firstSmallest) {
            firstSmallest = nums[i];
        };
    };
    for(i in nums.indices) {
        if(nums[i] < secondSmallest && nums[i] > firstSmallest) {
            secondSmallest = nums[i];
        };
    };
    print("Second Smallest Number::"+secondSmallest)
}
