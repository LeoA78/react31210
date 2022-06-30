import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting="¡Hola Mundo!"/>
      <ItemDetailContainer/>
    </>
  );
}

export default App;
