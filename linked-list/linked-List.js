class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }
  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head; // 새 노드의 next가 기존 head를 가리키게 함 (기존 첫 번째 노드와 연결)
    this.head = newNode; // head를 새 노드로 변경 (새 노드가 맨 앞에 오도록 함)
    this.length++;
  }

  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode; // 기존 tail의 next가 새 노드를 가리키게 함 (기존 마지막 노드와 연결)
    this.tail = newNode; // tail을 새 노드로 변경 (새 노드가 맨 뒤에 오도록 함)
    this.length++;
  }

  findNode(index) {
    let count = 0;
    let currentNode = this.head;
    while (count !== index) {
      currentNode = currentNode.next;
      count++;
    }
    return currentNode;
  }

  insert(index, value) {
    if (index === 0) {
      this.prepend(value);
      return;
    }
    if (index >= this.length) {
      this.append(value);
      return;
    }
    const newNode = new Node(value);
    const prevNode = this.findNode(index - 1);
    const nextNode = prevNode.next;
    newNode.next = nextNode;
    prevNode.next = newNode;
    this.length++;
  }

  remove(index) {
    const prevNode = this.findNode(index - 1);
    const removeNode = prevNode.next;
    prevNode.next = removeNode.next;
    this.length--;
  }
  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(array);
  }
}

const linkedList = new LinkedList("Dora");
linkedList.append("Sindy");
linkedList.append("Mary");
linkedList.printList();
linkedList.remove(1);
linkedList.printList();
