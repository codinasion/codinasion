https://leetcode.com/problems/reverse-integer/
class Solution {
public:
    int reverse(int x) {
       long long  int rev=0;
        if(x==0) return 0;
        else if(x>0){
            while(x!=0){
                int rem=x%10;
                rev=rev*10+rem;
                x/=10;
                if(rev>INT_MAX||rev<INT_MIN) return 0;
                }
            return rev;
        }
        else{
            // x=(-1)*x;
            while(x!=0){
                int rem=x%10;
                rev=rev*10+rem;
                x/=10;
                if(rev>INT_MAX||rev<INT_MIN) return 0;
                }
            
            return rev;
        }
    }
};