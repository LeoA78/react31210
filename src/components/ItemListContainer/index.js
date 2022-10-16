/* import ItemCount from "../ItemCount"; */
import ItemList from "../ItemList/ItemList";
import { SyncLoader } from "react-spinners";
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from "react-router-dom";
import { getProducts } from "../../store/slices/product/thunks";
import "./styles.css";

function ItemListContainer() {

  const dispatch = useDispatch();
  const { products, isLoading } = useSelector(state => state.product);
  const { category } = useParams();

    useEffect(() => {
      
      dispatch(getProducts(category));

    }, [dispatch,category]);


  return (
    <section className="container">
      {isLoading ? (
        <div className="loader">
          <SyncLoader color="#F98AB1" />
        </div>
      ) : (
        <ItemList items={products} />
      )}
    </section>
  );
}

export default ItemListContainer;
