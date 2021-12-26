console.clear();
/* ----------------------------------------------------------------------------------------------------------------------- */
/* go 1강
즉시 평가하는(값을 리턴하는) 함수
 */

const go = (...args) => reduce((a, f) => f(a), args);
const pipe =
  (f, ...fs) =>
  (...as) =>
    go(f(...as), ...fs);

go(
  add(0, 1),
  (a) => a + 1,
  (a) => a + 50,
  (a) => a + 60,
  (a) => a + 100,
  log
);

const f = pipe(
  (a, b) => a + b,
  (a) => a + 1,
  (a) => a + 50,
  (a) => a + 60,
  (a) => a + 100,
  log
);

f(0, 1);

console.clear();
/* ----------------------------------------------------------------------------------------------------------------------- */
/* goAndPipe 2강
위에서 아래로 순서대로 실행되고 읽기가 더 편하게 만들었다.
 */
// const products = [
//   { name: '반팔티', price: 15000 },
//   { name: '긴팔티', price: 25000 },
//   { name: '케이스', price: 35000 },
//   { name: '후드티', price: 1000 },
//   { name: '바지', price: 5000 },
// ];

log(
  reduce(
    add,
    // 0, 초기값을 생략 가능하다
    map(
      (p) => p.price,
      filter((p) => p.price < 20000, products)
    )
  )
);

go(
  products,
  (products) => map((p) => p.price, products),
  (prices) => filter((price) => price < 20000, prices),
  (prices) => reduce(add, prices),
  log
);
