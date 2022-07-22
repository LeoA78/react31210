import { SyncLoader } from "react-spinners";
import ItemDetail from "../ItemDetail";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../../firebase/firebase.js";
import "./styles.css";

function ItemListContainer() {

  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const { productId } = useParams();

  useEffect(() => {


    setLoading(true);

    getProduct(productId) //Esto viene de Firebase
      .then(res => setProduct(res))
      .finally(() => setLoading(false));


  }, [productId]);

  return (
    <section className="detail-container">
      {
        loading
          ? <div className='loader'>
            <SyncLoader color="#9381FF" />
          </div>
          : <ItemDetail item={product} />
      }
    </section>
  );
}

export default ItemListContainer;
