import parseStringAsArray from '../../utils/parseStringAsArray';

it('should return an array with 3 string elements', async () => {
  const arrayValue = parseStringAsArray('Node.js, ReactJS, React Native');

  expect(arrayValue.length).toBe(3);
});
