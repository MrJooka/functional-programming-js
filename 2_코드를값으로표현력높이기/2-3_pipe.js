console.clear();
/* ----------------------------------------------------------------------------------------------------------------------- */
/* pipe 응용편 1강
 */

go(
  products,
  filter((p) => p.price >= 20000),
  map((p) => p.price),
  reduce(add),
  log
);

go(
  products,
  filter((p) => p.price < 20000),
  map((p) => p.price),
  reduce(add),
  log
);

/* ----------------------------------------------------------------------------------------------------------------------- */
/* pipe함수 활용하여 변경 */
const total_price = pipe(
  map((p) => p.price),
  reduce(add)
);

go(
  products,
  filter((p) => p.price >= 20000),
  total_price,
  log
);

go(
  products,
  filter((p) => p.price < 20000),
  total_price,
  log
);

/* ----------------------------------------------------------------------------------------------------------------------- */
/* pipe함수 활용하여 변경 */
const base_total_price = (predi) => pipe(filter(predi), total_price);

go(
  products,
  base_total_price((p) => p.price >= 20000),
  log
);

go(
  products,
  base_total_price((p) => p.price < 20000),
  log
);
