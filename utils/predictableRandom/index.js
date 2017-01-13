// @flow
import R from 'ramda';
import seedRandom from 'seedrandom';

const seed = seedRandom('c.');
const constructArray = R.compose(R.map(seed), R.range(0), R.add(1));

export default (totalNums: number): () => number => {
  const arr = constructArray(totalNums);
  let nth = 0;

  return () => {
    const ret = R.nth(nth, arr);
    nth = nth === totalNums - 1 ? 0 : R.add(1, nth);
    return ret;
  };
};
