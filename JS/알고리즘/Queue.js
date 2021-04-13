class Queue {
  constructor() {
    this.arr = [];
  }

  enqueue(value) {
    this.arr.push(value);
  }

  dequeue() {
    if (this.isEmpty()) return "배열이 비어있습니다.";
    return this.arr.shift();
  }

  length() {
    return this.arr.length;
  }

  peek() {
    if (this.isEmpty()) return "배열이 비어있습니다.";
    return this.arr[0];
  }

  isEmpty() {
    return this.arr.length === 0;
  }

  clear() {
    this.arr = [];
  }
}

const queue = new Queue();

// 데이터 삽입
queue.enqueue(1); // arr: [1]
queue.enqueue(20); // arr: [1, 20]
queue.enqueue(30); // arr: [1, 20, 30]

// 데이터 추출
console.log(queue.dequeue()); // 1
console.log(queue.dequeue()); //20

// 현재 큐 길이
console.log(queue.length()); //1

// 다음에 추출될 데이터
console.log(queue.peek()); // 30

// 큐가 비어있는지 확인
console.log(queue.isEmpty()); // false

// 큐 초기화
queue.clear();
console.log(queue.peek());
console.log(queue); // arr: []
