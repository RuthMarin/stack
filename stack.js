process.stdin.resume();
process.stdin.setEncoding('utf8');
//ARRAY
class Stack{
  constructor(){
    this.stack = [];
  }
  push(element){
    this.stack.push(element);
    return this.stack;
  }
  pop(){
    return this.stack.pop();
  }
  pushArray(array){
    for(var i=0; i< array.length; i++){
        this.stack.push(parseInt(array[i]) + 2);
    }
    return this.stack;

  }
  peek(){
    return this.stack(this.stack.length - 1);
  }
  size(){
    return this.stack.length;
  }
  print(){
    console.log(this.stack);
  }
}
var stack = new Stack();
stack.pushArray(['1', '2', '3', '4', '5', '6']);
console.log(stack);
console.log(parseInt(stack.pop()) + 2)
console.log(stack)
 // OBJETO

 class Stack {
  constructor() {
    this.stack = {};
    this.count = 0;
  }

  push(element) {
    this.stack[this.count] = element;
    this.count++;
    return this.stack;
  }

  pop() {
    this.count--;
    const element = this.stack[this.count];
    delete this.stack[this.count];
    return element;
  }

  peek() {
    return this.stack[this.count - 1];
  }

  size() {
    return this.count;
  }

  print() {
    console.log(this.stack);
  }
}

const stack = new Stack();
console.log(stack.push('1'));
console.log(stack.push('2'));
console.log(stack.push('3'));
console.log(stack.push('4'));
console.log(stack.push('5'));
