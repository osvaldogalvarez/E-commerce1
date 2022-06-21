//@ts-check

import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import "./components/ItemListContainer/ItemListContainer.css";
import ItemCount from "./components/ItemCount/ItemCount";
import "./components/ItemCount/ItemCount.css";

function App() {
  
  let initial = 1
  let stock = 5

  function onAdd(valor){
    alert("agrego " + valor + " producto al carrito")
  }

  return (
    <>
      <Navbar />
      <ItemListContainer greeting= "Contador de productos"/>
      <ItemCount stock={stock} initial={initial} onAdd={onAdd}/>
    </>
  );
}

export default App;
