import React from 'react'

export default function Index() {
  return (
    <div className='pubsub'>
      <div className='content-item'>
        <h3>发布订阅模式</h3>
        <p>通俗来讲就是一共有发布者和订阅者两个概念，发布者收集订阅者的需求，然后在某个时刻告知订阅者。就好比小王去超市买充电器，小李去超市买剃须刀，但是都卖完了
          然后老板说，你们登记一下，等到时候来货了通知你们。小王和小李就是订阅者，超市老板就是发布者。
        </p>
        <p>应用场景：类似于上边的例子都可以使用发布订阅模式，代码实现如下：</p>
        <pre>{`
          class People {
            constructor(name) {
              this.name = name
            }
            on(eventName, callback) {
              // 存储事件
              if (this[eventName]) {
                this[eventName].push(callback)
              } else {
                this[eventName] = []
                this[eventName].push(callback)
              }
            }
            emit(eventName, data) {
              // 遍历执行
              this[eventName].forEach(callback => {
                callback(data)
              })
            }
            off(eventName, callback) {
              // 删除
              if (this[eventName]) {
                let index = this[eventName].indexOf(callback);
                index>-1 && this[eventName].splice(index, 1);
              } else {
                throw Error('不存在')
              }
            }
            sayHi() {
              console.log('Hi, I am ' + this.name)
            }
          }
        `}</pre>
      </div>
    </div>
  )
}
