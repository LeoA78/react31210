import { SyncLoader } from "react-spinners";
import ItemDetail from "../ItemDetail";
import { useEffect, useState } from "react";
import { getItem } from "../../mocks/fakeApi"
import "./styles.css";

function ItemListContainer() {

  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    getItem()
      .then(res => setProduct(res))
      .finally(() => setLoading(false));

  }, []);

  return (
    <section className="detail-container">
     
       {
        loading
          ? <div className='loader'>
            <SyncLoader color="#F98AB1"/>
          </div>
          :  <ItemDetail item={product}/>
      } 
    </section>
  );
}

export default ItemListContainer;
