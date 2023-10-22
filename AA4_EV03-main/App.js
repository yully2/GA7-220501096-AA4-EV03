import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';

function App() {
  // Aquí debes obtener la lista de productos desde tu backend

  const products = [
    // Lista de objetos de productos
    // Ejemplo: { id: 1, name: "Nombre del producto", description: "Descripción del producto", price: 10.99, image: "URL de la imagen" }
  ];

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <ProductList products={products} />
        </Route>
        <Route path="/product/:id">
          <ProductDetail />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
