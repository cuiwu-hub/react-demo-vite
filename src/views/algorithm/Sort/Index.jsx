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
              for (let j = i + 1; j < arr.length; j++) {
                if (arr[j] < arr[i]) [arr[i], arr[j]] = [arr[j], arr[i]];
              }
            }
            return arr;
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
      <div className='content-item'>
        <h3>6,希尔排序（个人理解：升级版的插入排序）</h3>
        <p>有间隔的插入排序，让相同间隔的元素进行插入排序，依次递归，知道间隔为1，即最后一个插入排序，整个数组排序成功</p>
        <pre>{`
          采用对半的方式设置每次的间隔
          function shellSort(arr) {
            for (let gap = parseInt(arr.length / 2); gap >= 1;gap = parseInt(gap / 2)) {
              for (let i = gap; i < arr.length; i++) {
                for (j = i; j > gap - 1; j -= gap) {
                  if (arr[j] < arr[j - gap]) {
                    [arr[j], arr[j - gap]] = [arr[j - gap], arr[j]];
                  }
                }
              }
            }
            return arr;
          }
          利用Knuth序列（效率比对半的高）
          function shellSort(arr) {
            let h = 1
            while(h<=arr.length/3) {
              h=h*3+1
            }
            for (let gap = h; gap > 0; gap = (gap-1)/3) {
              for (let i = gap; i < arr.length; i++) {
                for (j = i; j > gap - 1; j -= gap) {
                  if (arr[j] < arr[j - gap]) {
                    [arr[j], arr[j - gap]] = [arr[j - gap], arr[j]];
                  }
                }
              }
            }
            return arr;
          }
        `}</pre>
      </div>
      <div className='content-item'>
        <h3>6,计数排序（基于桶排序思想，不通过比较排序）</h3>
        <p>
          找出待排序的数组中最大和最小的元素，然后建立一个数组C用于统计待排数组中最小元素到最大元素区间中每个元素出现次数，
          统计数组中每个值为i的元素出现的次数，存入数组C的第i项，
          对所有的计数累加（从C中的第一个元素开始，每一项和前一项相加），
          反向填充目标数组：将每个元素i放在新数组的第C(i)项，每放一个元素就将C(i)减去1
        </p>
        <pre>{`
          function jishuSort(arr) {
            let res = [];
            let result = [0, 0, 0, 0, 0];
            for (let i = 0; i < arr.length; i++) {
              result[arr[i]]++;
            }
            for (let i = Math.min(...arr), j = 0; i < result.length; i++) {
              while (result[i]-- > 0) {
                res[j++] = i;
              }
            }
            return res;
          }
        `}</pre>
      </div>
      <div className='content-item'>
        <h3>7,基数排序（基于桶排序思想，不通过比较排序）</h3>
        <p>先将数组按照个位数进行排序，然后十位，以此类推，总的排序次数按照数组的最长位数数据，其他不够的补0</p>
        <pre>{`
          function radixSort(array) {
            let length = array.length;
            // 如果不是数组或者数组长度小于等于1，直接返回，不需要排序
            if (!Array.isArray(array) || length <= 1) return;
            let bucket = [],
              max = array[0],
              loop;
            // 确定排序数组中的最大值
            for (let i = 1; i < length; i++) {
              if (array[i] > max) {
                max = array[i];
              }
            }
            // 确定最大值的位数
            loop = (max + '').length;
            // 初始化桶
            for (let i = 0; i < 10; i++) {
              bucket[i] = [];
            }
            for (let i = 0; i < loop; i++) {
              for (let j = 0; j < length; j++) {
                let str = array[j] + '';
                if (str.length >= i + 1) {
                  let k = parseInt(str[str.length - 1 - i]); // 获取当前位的值，作为插入的索引
                  bucket[k].push(array[j]);
                } else {
                  // 处理位数不够的情况，高位默认为 0
                  bucket[0].push(array[j]);
                }
              }
              array.splice(0, length); // 清空旧的数组
              // 使用桶重新初始化数组
              for (let i = 0; i < 10; i++) {
                let t = bucket[i].length;
                for (let j = 0; j < t; j++) {
                  array.push(bucket[i][j]);
                }
                bucket[i] = [];
              }
            }
            return array;
          }
        `}</pre>
      </div>
      <div className='content-item'>
        <h3>8,桶排序</h3>
        <p>将数组分到有限数量的桶子里。每个桶子再个别排序（有可能再使用别的排序算法或是以递归方式继续使用桶排序进行排序）</p>
        <pre>{`
          function bucketSort(arr, bucketSize) {
            if (arr.length === 0) {
              return arr;
            }
            let maxValue = Math.max(...arr);
            let minValue = Math.min(...arr);
            //桶的初始化
            var DEFAULT_BUCKET_SIZE = 5;            // 设置桶的默认数量为5
            bucketSize = bucketSize || DEFAULT_BUCKET_SIZE;
            var bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1;  
            var buckets = new Array(bucketCount);
            for (i = 0; i < buckets.length; i++) {
              buckets[i] = [];
            }
            //利用映射函数将数据分配到各个桶中
            for (i = 0; i < arr.length; i++) {
              buckets[Math.floor((arr[i] - minValue) / bucketSize)].push(arr[i]);
            }
            arr.length = 0;
            for (i = 0; i < buckets.length; i++) {
              insertionSort(buckets[i]); // 对每个桶进行排序，这里使用了插入排序，这里也可以直接用js的数组sort方法，很直接
              for (var j = 0; j < buckets[i].length; j++) {
                arr.push(buckets[i][j]);                      
              }
            }
            return arr;
          }
        `}</pre>
      </div>
    </div>
  )
}
