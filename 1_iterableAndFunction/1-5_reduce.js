console.clear();
/* ----------------------------------------------------------------------------------------------------------------------- */
/* reduce 1강
 */
// const products = [
//   { name: '반팔티', price: 15000 },
//   { name: '긴팔티', price: 25000 },
//   { name: '케이스', price: 35000 },
//   { name: '후드티', price: 1000 },
//   { name: '바지', price: 5000 },
// ];

const reduce = curry((f, acc, iter) => {
  if (!iter) {
    iter = acc[Symbol.iterator]();
    acc = iter.next().value;
  }
  for (const a of iter) {
    acc = f(acc, a);
  }
  return acc;
});

log(reduce((total, p) => total + p.price, 0, products)); // 81000을 리턴

/* 하지만 아래와 같이 reduce함수의 매개변수를 2개만 입력했을 때, 객체 계산이 예상대로 동작하지 않는다. */
log(
  reduce((total, p) => {
    log(total);
    return total + p.price;
  }, products)
); // [object Object]250003500010005000 을 반환한다.

/* 자바시크립트 내장 reduce 매서드도 똑같이 동작한다 */
log(products.reduce((a, b) => a + b.price, 0)); // 81000을 리턴
log(products.reduce((a, b) => a + b.price)); //  [object Object]250003500010005000 을 반환한다.
