




export const getData = async (url_api) => {
  try {
      const response = await fetch(url_api);
      const data = await response.json();
      return data;
  } catch (error) {
      console.log(error); 
  }
}





/*
export const getItem = (productId) => {
  return new Promise((resolve, reject) => {
      if (true) {
        setTimeout(() => {
          idCategory 
          ? resolve(products.filter(product => product.category === idCategory))
          : resolve(products);
        }, 2000);
      } else {
        reject("Ocurrió un error! no pudimos cargar los productos");
      }
    });
}; */
