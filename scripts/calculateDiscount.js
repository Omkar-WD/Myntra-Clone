function calculateDiscount(arr) {
  if (arr.length !== 0) {
    return Math.ceil(
      arr
        .map(function (elem) {
          return Number(elem.price);
        })
        .reduce(function (a, b) {
          return a + b;
        })
    );
  }
  return 0;
}

export default calculateDiscount;
