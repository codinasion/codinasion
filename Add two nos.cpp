https://leetcode.com/problems/add-two-numbers/

/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
class Solution {
public:
    ListNode* addTwoNumbers(ListNode* l1, ListNode* l2) {
        ListNode *p=l1;
        ListNode *q=l2;
        ListNode *newna=new ListNode();
        ListNode *temp=newna;
        int c=0;
        while(l1!=NULL||l2!=NULL||c!=0){
            int sum=0,dig=0;
            if(l1!=NULL){
            sum+=l1->val;
                  l1=l1->next;}
            
            if(l2!=NULL){
            sum+=l2->val;
                l2=l2->next;
            }
            if(c!=0) sum+=c;
            c=sum/10;
            dig=sum%10;
            ListNode *newn=new ListNode(dig);
            temp->next=newn;
            temp=temp->next;
          
            
        }
//         if(l1!=NULL){
//             p=l1;
            
//         }
//         if(l2!=NULL){
//             if(c!=0){
//                 l2->val=l2->val+1;
                
//             }
//             temp->next=l2;
//         }
        return newna->next;
    }
};
