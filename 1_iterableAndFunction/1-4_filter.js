console.clear();
/* ----------------------------------------------------------------------------------------------------------------------- */
/* filter 1강
 */
const products = [
  { name: '반팔티', price: 15000 },
  { name: '긴팔티', price: 25000 },
  { name: '케이스', price: 35000 },
  { name: '후드티', price: 1000 },
  { name: '바지', price: 5000 },
];

const filter = curry((f, iter) => {
  let result = [];

  for (const a of iter) {
    if (f(a)) result.push(a);
  }

  return result;
});

log(filter((a) => a.price > 20000, products));
/* filter 함수 또한 두번째 매개 변수에 이터러블을 대입 가능하다
 => 어떠한 타입이든 제너레이터 함수 실행하여 필터함수를 사용 가능하다 */
log(
  filter(
    (n) => n % 2,
    (function* () {
      yield 1;
      yield 2;
      yield 3;
      yield 4;
      yield 5;
      yield 6;
      return 7;
    })()
  )
);
