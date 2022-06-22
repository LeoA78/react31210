import "./styles.css";

function ItemListContainer({greeting}) {
  return (
    <section className="container">
        <h2>{greeting}</h2>
    </section>
    );
}


export default ItemListContainer;