import { getData } from "../../../services/connection";
import { setProducts, startLoadingProducts, setProductSelected } from "./productSlice";

const URL_API_PRODUCTS = `http://localhost:8080/product/`;

export const getProducts = (categoryName) => {

  return async (dispatch) => {
    dispatch(startLoadingProducts());

    let result = [];

    if (categoryName) {
      result = await getData(`${URL_API_PRODUCTS}category/${categoryName}?page=0&size=12` );
    } else {
      result = await getData(`${URL_API_PRODUCTS}all?page=0&size=32`);
    }
    dispatch(setProducts(result.data.results));
  };
  
};


export const getProductSelected = (id) => {
    return async (dispatch) => {
        dispatch(startLoadingProducts());
    
        const result = await getData(`${URL_API_PRODUCTS}${id}`);
    
        dispatch(setProductSelected(result.data));
    };
    }
