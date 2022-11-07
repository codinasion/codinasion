fun main() {
    val inputArray = arrayOf<Int>(1, 2, 3, 4, 5)
    find2ndLargest(inputArray)
}

fun find2ndLargest(array:Array<Int>){
    var first:Int;var second:Int
    if(array.size < 2){
        System.out.print(" Invalid Input ");
        return;
    }
    first = Integer.MIN_VALUE; second = Integer.MIN_VALUE;
    for (i in 0..array.size-1) {
        /* If current element is greater than
        first then update both first and second */
        if (array[i] > first) {
            second = first;
            first = array[i];
        }

        /* If arr[i] is in between first and
               second then update second  */
        else if (array[i] > second && array[i] != first)
            second = array[i]
    }
    if (second == Integer.MIN_VALUE) {
        println(
            "There is no second largest"
                    + " element\n"
        );
    }
    else {
        println(
            "The second largest element"
                    + " is " + second
        );
    }
}
