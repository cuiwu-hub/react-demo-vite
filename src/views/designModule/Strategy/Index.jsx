import React from 'react'

export default function Index() {
  return (
    <div className='strategy'>
      <div className='content-item'>
        <h3>策略模式</h3>
        <p>一个问题匹配多个解决方案，不一定用到哪一个</p>
        <p>应用场景：比如一些商品优惠，可以制定多个优惠政策，根据实际情况选择不同的优惠政策</p>
        <pre>{`
          简单实现
          function calcPrice(price, type) {
            if (type === 'bz') {
              price *= 0.8
            } else if (type === 'jz) {
              price *= 0.9
            }
            return price
          }
          const res = calcPrice(320, 'bz')

          // 可以采用闭包的形式将优惠政策保存下来，并实现添加策略和删除策略的功能
          const calcPrice = (function () {
            const sale = {
              'bz': function (price) { return price * 0.8 },
              'jz': function (price) { return price * 0.9 }
            }
            function calcPrice(price, type) {
              if (!sale[type]) return '没有这个折扣'
              return sale[type](price)
            }
            // 添加优惠政策
            calcPrice.add = function (type, fn) {
              if (sale[type]) return '该折扣已存在'
              sale[type] = fn
            }
            calcPrice.del = function (type) {
              if (!sale[type]) return '该折扣不存在，无法删除'
              delete sale[type]
            }
            return calcPrice
          })()
        `}</pre>
      </div>
    </div>
  )
}
