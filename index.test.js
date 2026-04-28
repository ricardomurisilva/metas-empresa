const { soma } = require('./index');

test('soma 1 + 1', () => {
  expect(soma(1, 1)).toBe(2);
});

test('soma 2 + 3', () => {
  expect(soma(2, 3)).toBe(5);
});

test('soma números negativos', () => {
  expect(soma(-1, -1)).toBe(-2);
});

test('soma com zero', () => {
  expect(soma(0, 5)).toBe(5);
});

test('soma valores maiores', () => {
  expect(soma(100, 200)).toBe(300);
});
