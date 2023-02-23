
const productsArray =
 [
  {
    id:  "1",
    title: "Coffe",
    price: "12.99"
  },
  {
    id: '2', 
    title: "Iced Tea",
    price: "32.99"
  },
  {
    id: "3",
    title: "Dry Gin",
    price: "42.99"
  }
];
 
 function getProductData(id) {
  let productData = productsArray.find(product => product.id === id);

    if (productData === undefined) {
      console.log ("Product data does not exist for ID:" + id);
      return undefined;
    }

      return productData;
 }

export { productsArray, getProductData };