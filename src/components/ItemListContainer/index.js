/* import ItemCount from "../ItemCount"; */
import ItemList from "../ItemList/ItemList";
import { SyncLoader } from "react-spinners";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getData } from "../../connection/data";
import "./styles.css";

function ItemListContainer() {
  const [listProducts, setListProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {

    setLoading(true);


    getData(categoryId).then((data) => {
      setListProducts(data);
      setLoading(false);
    });

    


    /*
    const URL_API_PRODUCTS = `http://localhost:8080/product/`;

    fetch(`${URL_API_PRODUCTS}all?page=0&size=12`)
    .then(response => response.json())
    .then(data => {
      setListProducts(data.data.results)
    })
    .catch(error => console.log(error))
    .finally(() => setLoading(false));
      */
  }, [categoryId]);

  return (
    <section className="container">
      {loading ? (
        <div className="loader">
          <SyncLoader color="#F98AB1" />
        </div>
      ) : (
        <ItemList items={listProducts} />
      )}
    </section>
  );
}

export default ItemListContainer;
