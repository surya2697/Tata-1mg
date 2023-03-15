export const AllBrands = (allProducts) => {
  let obj = {};
  for (let i = 0; i < allProducts.length; i++) {
    let current = allProducts[i];
    if (!obj[current.brand]) {
      obj[current.brand] = { name: current.brand, count: 1 };
    } else {
      let count = obj[current.brand].count;
      obj[current.brand].count = Number(count) + 1;
    }
  }
  let brands = Object.values(obj);
  return brands;
};
