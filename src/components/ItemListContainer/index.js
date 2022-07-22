/* import ItemCount from "../ItemCount"; */
import ItemList from "../ItemList/ItemList";
import { SyncLoader } from "react-spinners";
import { useEffect, useState } from "react";
import { getProducts } from "../../firebase/firebase.js";
import {useParams} from "react-router-dom";

import "./styles.css";

function ItemListContainer({ greeting }) {

  const [listProducts, setListProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const {categoryId} = useParams();


  useEffect(() => {

    
    setLoading(true);

    getProducts(categoryId)
      .then(result => setListProducts(result))
      .finally(() => setLoading(false));
      

  }, [categoryId]);

  return (
    <section className="container">
      {
        loading
          ? <div className='loader'>
            <SyncLoader color="#F98AB1"/>
          </div>
          : <ItemList items={listProducts} />
      }

    </section>
  );
}

export default ItemListContainer;
