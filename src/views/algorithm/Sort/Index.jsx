import React from 'react'

export default function Index() {
  return (
    <div>
      <div className='content-item'>
        <h3>排序算法口诀: <a href="https://www.bilibili.com/video/BV1Y64y1W7qK?p=5&vd_source=0ab4f35f6b886611868b17725d425cf0">（参考左神）</a></h3>
        <p>选（选择）泡（冒泡）插（插入）</p>
        <p>快（快排）归（归排）堆（堆排）希（希尔排序）桶（桶排序）计（计数排序）基（基数排序）</p>
        <p>恩方（选--插）恩老恩（快--堆）一三（希）</p>
        <p>对恩加K（桶--计）恩乘K（基）</p>
        <p>不稳（选）稳（冒）稳（插）不稳（快）稳（归）</p>
        <p>不稳（堆）不稳（希尔）稳（桶）稳（计）稳（基）</p>
      </div>
      <div className='content-item'>
        <h3>1,选择排序</h3>
        <p>选择排序就是每次遍历都将最小的放到最前边，遍历完毕即排序完成。具体代码如下：</p>
        <pre>{`
          function selectSort(arr) {
            for (let i = 0; i < arr.length; i++) {
              let index = i
              for (let j = i+1; j < arr.length; j++) {
                if (arr[index]>arr[j]) index = j
              }
              [arr[i], arr[index]] = [arr[index], arr[i]]
            }
            return arr
          }
        `}
        </pre>
      </div>
      <div className='content-item'>
        <h3>2,冒泡排序</h3>
        <p>冒泡排序是前后两两进行对比，前大后小直接交换，具体代码如下：</p>
        <pre>{`
          function maopaoSort(arr) {
            for (let i = 0; i < arr.length; i++) {
              for (let j = i; j < arr.length - i - 1; j++) {
                if (arr[j]>arr[j+1]) [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
              }
            }
            return arr
          }
        `}
        </pre>
      </div>
      <div className='content-item'>
        <h3>3,插入排序</h3>
        <p>将每次遍历的数和该数前边的数据依次比较，小于前边的数，则与前边数换位，具体代码如下：</p>
        <pre>{`
          function insertSort(arr) {
            for (let i = 1; i < arr.length; i++) {
              for (let j = 0; j < i; j++) {
                if (arr[j]>arr[i]) [arr[j], arr[i]] = [arr[i], arr[j]]
              }
            }
            return arr
          }
        `}
        </pre>
      </div>
      <div className='content-item'>
        <h3>4,快速排序</h3>
        <p>采用二分+递归的思想，每次递归都将数组一分为二并取中间值，然后比中间值大的放在右边数组中，反之放在左边，具体代码如下：</p>
        <pre>{`
          function quickSort(arr) {
            if (arr.length < 1) return []
            let midIdx = parseInt(arr.length/2)
            let midVal = arr.splice(midIdx, 1)[0]
            let left = [], right = []
            arr.forEach(item => {
              if (item > midVal) right.push(item)
              if (item < midVal) left.push(item)
            })
            return [...quickSort(left), midVal, ...quickSort(right)]
          }
        `}
        </pre>
      </div>
      <div className='content-item'>
        <h3>5,归并排序</h3>
        <p>采用二分+递归的思想，将数组一分为二之后，将两个数组中的数据进行比较，谁小谁先放入新的数组（merge方法），具体代码如下（待优化）：</p>
        <pre>{`
          let arr1 = [1, 3, 2, 6, 4, 5, 7];
          function sort(arr, left, right) {
            if (left == right) return
            let mid = parseInt((left+right)/2)
            sort(arr, left, mid)
            sort(arr, mid+1, right)
            merge(arr, left, mid+1, right)
          }
          function merge(arr, leftPtr, rightPtr, rightBound) {
            let temp = [];
            let mid = rightPtr - 1;
            let i = leftPtr,
              j = rightPtr,
              k = 0;
            while ((i <= mid && j <= rightBound)) {
              if (arr[i] < arr[j]) {
                temp[k] = arr[i];
                k++;
                i++;
              } else {
                temp[k] = arr[j];
                j++;
                k++;
              }
            }
            while (i <= mid) {
              temp[k++] = arr[i++];
            }
            while (j <= rightBound) {
              temp[k++] = arr[j++];
            }
            for (let m = 0; m < temp.length; m++) {
              arr[leftPtr+m] = temp[m]
            }
          }
          sort(arr1, 0, arr1.length - 1)
          console.log(arr1) // [1,2,3,4,5,6,7]
        `}
        </pre>
      </div>
    </div>
  )
}
