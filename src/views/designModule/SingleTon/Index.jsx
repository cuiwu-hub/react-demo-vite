import React from 'react'

export default function Index() {
  return (
    <div className='single-ton'>
      <div className='content-item'>
        <h3>单例模式</h3>
        <p>构造函数或者类（在js语言中），自始至终只能有一个实例。</p>
        <p>应用场景：windows系统的任务管理器，回收站，应用程序的日志，数据库连接池等等。代码实现如下：</p>
        <pre>{`
          function Person() {
            function Person(name, age) {
              this.name = name
              this.age = age
            }
            let instance = null
            return function (...arg) {
              if (!instance) instance = new Person(...arg)
              return instance
            }
          }
          const p1 = new Person('curry', 24) // 创建instance实例并返回
          const p2 = new Person() // 返回instance实例
        `}</pre>
      </div>
    </div>
  )
}
