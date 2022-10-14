/* import ItemCount from "../ItemCount"; */
import ItemList from "../ItemList/ItemList";
import { SyncLoader } from "react-spinners";
import { useEffect, useState } from "react";
import { getProducts } from "../../firebase/firebase.js";
import {useParams} from "react-router-dom";

import "./styles.css";

function ItemListContainer() {

  const [listProducts, setListProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const {categoryId} = useParams();


  useEffect(() => {

    
    setLoading(true);

  /*  getProducts(categoryId)
      .then(result => setListProducts(result))
      .finally(() => setLoading(false));
*/

    fetch("http://localhost:8080/product/all?page=0&size=10")
      .then((response) => response.json())
      .then((result) => setListProducts(result.data.results))
      .finally(() => setLoading(false));
      
      console.log("Product list>>>",listProducts);

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
