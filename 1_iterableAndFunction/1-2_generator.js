console.clear();
/* ----------------------------------------------------------------------------------------------------------------------- */
/* 제너레이터 1강
제너레이터: 이터레이터이자 이터러블을 생성하는 함수 
그래서 제너레이터를 사용하면 어떤 값이든 순회가능한 이터러블로 만들 수 있다 */

function* gen() {
  yield 1;
  yield 2;
  yield 3;
  return 100;
}

const iter = gen();
console.log(iter[Symbol.iterator]() === iter);

console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next()); // done: true 일 때, 제너레이터에서 return 값이 반환된다.

for (a of gen()) console.log(a); /*  for of 문에서는 제너레이터 return 값은 반환되지 않는다. done: false일 때만 순회한다 */

/* ----------------------------------------------------------------------------------------------------------------------- */
/* 제너레이터 2강 */

/* function* odds() {
  yield 1;
  yield 3;
  yield 5;
} */
function* odds(limit) {
  for (let i = 0; i < limit; i++) {
    if (i % 2) yield i;
  }
}
const iter2 = odds(10);
console.log(iter2.next());
console.log(iter2.next());
console.log(iter2.next());
console.log(iter2.next());
console.log(iter2.next());
console.log(iter2.next());

function* infinity(i = 0) {
  while (true) yield i++;
}

const iter3 = infinity(); /* 제너레이터를 사용하여 오류 없이 무한수를 생성하는 함수를 실행시킬 수 있다.
                           그리고 무한배열을 가지는 이터레이터를 반환한다*/
iter3.next();
iter3.next();
iter3.next();
iter3.next();
iter3.next();

function* odds2(l) {
  for (const a of infinity(1)) {
    if (a % 2) yield a;
    if (a === l) return;
  }
}
const iter4 = odds2(10);
iter4.next();
iter4.next();

function* limit(l, iter) {
  for (const a of iter) {
    yield a;
    if (l === a) return;
  }
}
function* odds3(l) {
  for (const a of limit(l, infinity(1))) {
    if (a % 2) yield a;
  }
}

const iter5 = odds3(20);
iter5.next();
iter5.next();
iter5.next();
for (const a of iter5) console.log(a);
