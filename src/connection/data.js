

const URL_API_PRODUCTS = `http://localhost:8080/product/`;


export function getData(categoryName) {
    let result = [];

    if (categoryName) {
       result  = fetch(`${URL_API_PRODUCTS}category/${categoryName}?page=0&size=12`)
            .then(response => response.json())
            .then(data => data.data.results)

    } else {

        result = fetch(`${URL_API_PRODUCTS}all?page=0&size=12`)
            .then(response => response.json())
            .then(data => {
                return data.data.results
            })

       
    };
    
    return result

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
