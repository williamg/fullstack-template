import increment from "increment";

it ("Should work for positive increments", () => {
  let res = increment (0, { increment: 2 });
  expect (res.total).toBe (2);
});

it ("Should work for negative increments", () => {
  let res = increment (5, { increment: -2 });
  expect (res.total).toBe (3);
});
