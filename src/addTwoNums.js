/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    var result = []; 
    var l1Flag = true
    var l1Val = 0; 
    var l2Flag = true;
    var l2Val = 0; 
    var flag = 0
    var tmp = 0
    while(l1 || l2){
        if (l1) {
            l1Val = l1.val
            l1 = l1.next
        }else{
            l1Val = 0
        }
        if (l2){
            l2Val = l2.val
            l2 = l2.next
        }else {
            l2Val = 0
        }
        tmp = l1Val + l2Val
        if ( tmp + flag >= 10 ) {
            
            result.push((tmp+flag) % 10)
            flag = 1
        }else {
            
            result.push(tmp + flag)
            flag = 0
        }
    }
    if (flag == 1){
        result.push(flag)
    }
    
    return result
};