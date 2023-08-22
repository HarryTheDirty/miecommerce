import React from "react";
import ProductoDetalle from "./components/ProductoDetalle";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Detalle de Producto</h1>
      </header>
      <main>
        <ProductoDetalle />
      </main>
    </div>
  );
}

export default App;