class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function solution(head) {
  let rabbit = head;
  let tortle = head;

  if (rabbit.next === null) return rabbit;
  if (rabbit.next.next === null) return rabbit.next;

  while (rabbit !== null && rabbit.next !== null) {
    rabbit = rabbit.next.next;
    tortle = tortle.next;
  }
  return tortle;
}

const createTestListNodeOfN = (n) => {
    const head = new ListNode(1)
    if (n === 1) {
        return head
    }
    let current = head
    for (let i = 2; i <= n; i++) {
        current.next = new ListNode(i)
        current = current.next
    }
    return head
}

console.log(solution(createTestListNodeOfN(1)));
console.log(solution(createTestListNodeOfN(2)));
console.log(solution(createTestListNodeOfN(3)));
console.log(solution(createTestListNodeOfN(4)));
console.log(solution(createTestListNodeOfN(5)));
