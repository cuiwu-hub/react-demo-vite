import React from 'react'

export default function Index() {
  return (
    <div className='line-table'>
      <div className='content-item'>
        <h3>1,线性表的定义和特点</h3>
        <p>线性表是n个具有相同特性的数据元素的有限序列（例如26个英文字母表）。其特点是存在唯一的一个被称作‘第一个的数据元素’；存在唯一一个被称作‘最后一个’的数据元素；
          除第一个之外，结构中到的每个数据元素均只有一个前驱；除最后一个之外，结构中的每个数据元素均只有一个后继</p>
      </div>
      <div className='content-item'>
        <h3>2,线性表的顺序表示</h3>
        <p>线性表的顺序表示指的是用一组连续的内存地址依次存储线性表的数据元素，这种存储的线性表为顺序表。其特点是逻辑上相邻的数据元素，其物理次序也是相邻的</p>
        <p>优点：方法简单，基于数组，容易实现；不用为表示结点间的逻辑关系而增加额外的开销；顺序表可以按照元素下标随机访问</p>
        <p>缺点：在插入和删除时大约移动平均一半的元素，对比较大的顺序表操作时效率很低；需要预先分配足够大的空间，估计过大，导致空间浪费；估计过小，会造成溢出</p>
        <p>适用场景：“较稳定”的线性表（很少有删除或插入操作，查找操作较多）选择顺序存储</p>
      </div>
      <div className='content-item'>
        <h3>3,线性表的链式表示</h3>
        <p>线性表的链式表示（链表）就是每个存储单元中不仅存储元素，还存储一个指针指向直接后继元素</p>
        <p>优点：不用事先分配空间，用一个空间开辟一个，不会造成存储空间的浪费；在插入或者删除元素的时候，不用移动元素，只需要改变指针的指向</p>
        <p>缺点：存储空间不是连续的，不支持随机访问，要找一个元素，只能从头到尾遍历</p>
        <p>适用场景：频繁做插入或删除操作的动态性较强，而查找操作较少的线性表可以选择链表</p>
      </div>
      <div className='content-item'>
        <h3>4,循环链表和双向链表</h3>
        <p>循环链表就是最后一个元素的指针指向第一个元素，形成一个环。解决了单向链表只能往前的问题。</p>
        <p>双向链表是给每个元素添加两个指针，一个指向直接后继，另一个指向直接前驱。使链表既能往前又能后退（循环链表也能实现后退，但是必须将所有元素全部走一遍）</p>
      </div>
    </div>
  )
}
