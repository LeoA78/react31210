import { setMessage, startLoadingOrder, createOrder } from "./orderSlice";
import { postCreateOrder } from "../../../services/orderService";
import { clearCart } from "../cart/cartSlice";
import { clearMessage, clearOrder } from "./orderSlice";



export const createOrderDB = (order) => {
  return async (dispatch) => {
    dispatch(startLoadingOrder());

    const result = await postCreateOrder(order);

    if (result.responseCode === 201) {
      dispatch(createOrder(result.data));
      dispatch(
        setMessage({ type: "success", detail: "Order creada correctamente." })
      );

      

      setTimeout(() => {
        dispatch(clearMessage());
        dispatch(clearOrder());
        dispatch(clearCart());
      }, 20000);


    } else {
      console.log(result);
      dispatch(
        setMessage({ type: "error", detail: "Error: " + result.message })
      );
    }
  };
};
