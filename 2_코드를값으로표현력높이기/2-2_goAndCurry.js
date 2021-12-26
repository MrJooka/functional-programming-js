console.clear();
/* ----------------------------------------------------------------------------------------------------------------------- */
/* curry 1강
 */

// const curry =
//   (f) =>
//   (a, ..._) =>
//     _.length ? f(a, ..._) : (..._) => f(a, ..._);

const mult = curry((a, b) => a * b);

log(mult(3)(2));

const mult3 = mult(3);
log(mult3(10));
log(mult3(5));
log(mult3(2));

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

// go함수를 통해서 실행순서를 읽기 편하게 한다
go(
  products,
  (products) => map((p) => p.price)(products),
  (prices) => filter((price) => price < 20000)(prices),
  (prices) => reduce(add)(prices),
  log
);

// map, filter, reduce 커링을 통해서 더 읽기 편하게 한다
go(
  products,
  map((p) => p.price), // 인수가 하나만 들어간 map 을 실행하면 함수가 호출된다. 따라서 위와 똑같은 결과를 도출
  filter((price) => price < 20000),
  reduce(add),
  log
);
