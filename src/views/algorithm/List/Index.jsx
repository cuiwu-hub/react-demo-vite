import React from 'react'

export default function Index() {
  return (
    <div>
      <div className='content-item'>
        <h3>1,重排链表（注：不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换）</h3>
        <pre>{`
          function reset(head) {
            console.log('重排链表')
          }
        `}</pre>
      </div>
    </div>
  )
}
