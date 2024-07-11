/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function middleNode(head: ListNode | null): ListNode | null {
  let counter = 0;
  let current = head;
  while (current !== null) {
    counter += 1;
    current = current.next;
  }

  current = head;
  const middleNode =
    counter % 2 === 0 ? counter / 2 + 1 : Math.ceil(counter / 2);
  for (let i = 1; i < middleNode; i++) {
    current = current!.next;
  }
  return current;
}
function twoPointersVersion(head: ListNode | null): ListNode | null {
  let rabbit = head;
  let tortle = head;

  while (rabbit !== null && rabbit.next.next !== null) {
    rabbit = rabbit.next.next;
    tortle = tortle!.next;
  }
  return tortle;
}
