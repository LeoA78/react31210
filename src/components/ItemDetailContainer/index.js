import { SyncLoader } from "react-spinners";
import ItemDetail from "../ItemDetail";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductSelected } from "../../store/slices/product/thunks";
import { useSelector, useDispatch } from 'react-redux'
import "./styles.css";

function ItemListContainer() {


  const dispatch = useDispatch();
  const { productSelected, isLoading } = useSelector(state => state.product);

  const { productId } = useParams();

  useEffect(() => {

      dispatch(getProductSelected(productId));

  }, [dispatch, productId]);

  return (
    <section className="detail-container">
      {
        isLoading
          ? <div className='loader'>
            <SyncLoader color="#9381FF" />
          </div>
          : <ItemDetail item={productSelected} />
      }
    </section>
  );
}

export default ItemListContainer;
