function calculateSubtotal(arr) {
  if (arr.length !== 0) {
    return Math.ceil(
      arr
        .map(function (elem, i) {
          let price = Number(elem.price);
          return price;
        })
        .reduce(function (a, b) {
          return a + b;
        }, 0)
    );
  }
  return 0;
}

export default calculateSubtotal;

// function calculateSubtotal(arr, qtyArr) {
//   if (arr.length !== 0) {
//     return Math.ceil(
//       arr
//         .map(function (elem, i) {
//           let price = Number(elem.price.substring(4)) * Number(qtyArr[i]);
//           console.log(price);
//           return price;
//         })
//         .reduce(function (a, b) {
//           return a + b;
//         }, 0)
//     );
//   }
//   return 0;
// }

// export default calculateSubtotal;
