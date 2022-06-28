import React from 'react'

export default function Index() {
  return (
    <div className='observer'>
      <div className='content-item'>
        <h3>观察者模式</h3>
        <p>观察者模式是一种对象行为模式。它定义对象间的一种一对多的依赖关系，当一个对象的状态发生改变时，所有依赖于它的对象都得到通知并被自动更新。在观察者模式中，主体是通知的发布者，它发出通知时并不需要知道谁是它的观察者，可以有任意数目的观察者订阅并接收通知</p>
        <p>应用场景：比如多个用户关注（相当于注册观察者）同一个商品，所有关注的用户都是观察者，商品是被观察对象。当商品降价时，则会自动通知所有关注的用户。vue对数据的监听也用到了该模式。代码实现如下：</p>
        <pre>{`
          观察者构造函数
          class Observer {{
            constructor(name, fn=() => {}) {
              this.name = name
              this.fn = fn
            }
          }
          const o1 = new Observer('张三', (price) => {console.log('张三您好，您关注的商品价格修改为' + price)})
          const o2 = new Observer('李四', (price) => {console.log('李四您好，您关注的商品价格修改为' + price)})
          class Subject {
            constructor(price) {
              this.price = price
              this.observers = []
            }
            setState = (price) => {
              // 修改商品价格
              this.price = price
              // 通知所有关注该商品的用户
              this.observers.forEach(item => {
                item.fn(this.state)
              })
            }
            addObserver = (obs) => {
              this.observer = this.observer.filter(item => item !== obs) // 防止添加同一个观察者
            }
          }
          const goods = new Subject(100)
          goods.addObserver(o1)
          goods.addObserver(o2)
          goods.setState(200)
        `}</pre>
      </div>
    </div>
  )
}
