console.clear();
/* ----------------------------------------------------------------------------------------------------------------------- */
/* map 1강 
이터러블 프로토콜을 따른 map의 다형성
*/
const curry =
  (f) =>
  (a, ..._) =>
    _.length ? f(a, ..._) : (..._) => f(a, ..._);

const map = curry((f, iter) => {
  let result = [];
  for (const a of iter) {
    result.push(f(a));
  }
  return result;
});

console.log(map((element) => element.nodeName, document.querySelectorAll('*')));
// const it = document.querySelectorAll('*')[Symbol.iterator]();
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());

function* gen() {
  yield 1;
  if (false) yield 2;
  yield 3;
}

// 모든 이터러블을 넣을 수 있다 => 제너레이터를 통해 생성된 값(표현할 수 있는 모든 것)을 사용가능하다.
console.log(map((a) => a * a, gen()));

/* ----------------------------------------------------------------------------------------------------------------------- */
/* map 2강 
이터러블 프로토콜을 따른 map의 다형성
*/

const m = new Map();
m.set('a', 10);
m.set('b', 33);

console.log(new Map(map(([k, v]) => [k, v * 10], m))); // Map객체를 수정가능하다
