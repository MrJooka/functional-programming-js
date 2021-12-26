const log = console.log;

const iterable = {
  [Symbol.iterator]() {
    let i = 3;
    return {
      next() {
        return i === 0
          ? { done: true }
          : {
              value: i--,
              done: false,
            };
      },
      [Symbol.iterator]() {
        return this;
      },
    };
  },
};

let iterator = iterable[Symbol.iterator]();

iterator.next();
// const a1 = iterator.next();
// console.log(a1);
// const a2 = iterator.next();
// console.log(a2);
// const a3 = iterator.next();
// console.log(a3);

for (const a of iterator) {
  console.log(a);
}

// const arr2 = [1, 2, 3];
// let iter2 = arr2[Symbol.iterator]();
// iter2.next();
// for (const a of iter2) console.log(a);

console.log(document.querySelectorAll('*')); // NodeList를 반환한다 NodeList의 [[Prototype]]에 Symbol.iterator를 가지고 있다
const iteratorForNodeList = document.querySelectorAll('*')[Symbol.iterator]();
iteratorForNodeList.next();
iteratorForNodeList.next();
iteratorForNodeList.next();
for (const a of iteratorForNodeList) {
  //그래서 for of 문이 사용 가능하다.
  console.log(a);
}
