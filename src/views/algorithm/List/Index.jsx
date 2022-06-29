import React from 'react'
export default function Index() {
  return (
    <div>
      <div className='content-item'>
        <h3>1,反转链表</h3>
        <pre>{`
          function reserve (head) {
            let newHead = null
            let temp = null
            while(head){
                temp = head.next
                head.next = newHead
                newHead = head
                head = temp
            }
            return newHead
          }
        `}</pre>
      </div>
      <div className='content-item'>
        <h3>2,链表合并（以下实例是两个链表简单的依次合并，合并两个有序链表和重排链表都是以这个思想为基础）</h3>
        <pre>{`
          function mergeLists(l1, l2) {
            const prehead = new ListNode(-1);
            let prev = prehead;
            let flag = 0
            while(l1 && l2) {
              if (flag%2==0) {
                prev.next = l1
                l1 = l1.next
              } else {
                pre.next = l2
                l2 = l2.next
              }
              flag++
              prev = prev.next
            }
            pre.next = l1 ? l1 : l2
            return prehead.next // 因为头节点不是我们需要的，所以直接返回next
          }
        `}</pre>
      </div>
      <div className='content-item'>
        <h3>3,重排链表（注：不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换）</h3>
        <p>思路：通过快慢指针（快指针一次走两步，慢指针一次走一步，当快指针走到尾部，慢指针刚好处在中间节点）找到中间节点，然后将后半部分进行反转并将两个链表依次相连</p>
        <pre>{`
          // 反转链表(参考“1,反转链表”)
          function reserve (head) {
            let newHead = null
            let temp = null
            while(head){
                temp = head.next
                head.next = newHead
                newHead = head
                head = temp
            }
            return newHead
          }
          function reorderList (head) {
            let slowp = head, fastp = head
            while(slowp && fastp) {
              slowp = slowp.next
              fastp = fastp.next.next
            }
            reserve(slowp.next)
            slowp.next = null
            // 以下代码参考“2,链表合并”
            let l = {val: -1, next: null}
            let lp = l
            let p1 = head, p2 = head1
            let flag = 0
            while(p1 && p2) {
              if (flag%2 == 0) {
                lp.next = p1
                p1 = p1.next
                lp = lp.next
              } else {
                lp.next = p2
                p2 = p2.next
                lp = lp.next
              }
              flag++
            }
            lp.next = p1 ? p1 : p2
            return l.next
          }
        `}</pre>
      </div>
    </div>
  )
}
