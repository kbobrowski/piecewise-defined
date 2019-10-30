import { Piecewise, Piecewise2D } from '../index';

test('test 1D', () => {
  const pf = Piecewise()
    .add(x => x > 3 && x < 6, x => 2 * x)
    .add(x => x >= 6, x => x)
    .compile();
  expect(pf(4)).toBe(8);
  expect(pf(7)).toBe(7);
  expect(pf(3)).toBe(undefined);
});

test('test 2D', () => {
  const pf = Piecewise2D()
    .add(point => Math.pow(point[0], 2) + Math.pow(point[1], 2) <= 1, point => point[0] + point[1])
    .compile();
  expect(pf([0.5, 0.5])).toBe(1);
  expect(pf([1.5, 0.5])).toBe(undefined);
});
