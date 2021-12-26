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

const add = (a, b) => a + b;
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
log(
  reduce(
    add,
    // 0, 초기값을 생략 가능하다
    filter(
      (n) => n >= 20000,
      map((p) => p.price, products)
    )
  )
);
