
export default (numberOfItems) => (
  Array.apply(null, {length: numberOfItems})
    .map(Number.call, Number)
);
