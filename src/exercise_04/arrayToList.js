export default function arrayToList(array) {
  // This function creates a linked list from an array.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in array_to_list_spec.js.
  // * Please do NOT modify the signature of the function.
  if (array === undefined || array === null) throw new Error('Creating list from undefined array');
  if (array.length === 0) throw new Error('Creating list from empty array');
  class LinkedNode {
    constructor(value) {
      this.value = value;
      this.next = null;
    }

    getLastNode() {
      let lastNode = this;
      while (lastNode.next != null) {
        lastNode = lastNode.next;
      }
      return lastNode;
    }

    addNextNode(value) {
      if (this.value != null) this.getLastNode().next = new LinkedNode(value);
      else this.value = value;
    }
  }
  const resList = new LinkedNode(null);
  array.forEach((element) => {
    resList.addNextNode(element);
  });
  return resList;
}
