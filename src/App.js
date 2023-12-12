import React from 'react';
import './App.css';
import { Provider } from 'react';
import Catalog from './components/catalog';
import Compare from './components/compare';
import Product from './components/product';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';

function App() {
  //const { id } = useParams();
  //console.log(id);
  return (
    <div className="confronto-app">
      <h1>Confronto</h1>
      <NavBar />
      <Routes>

        <Route path="/" exact element={<Catalog />} />
        <Route path="/compare" exact element={<Compare />} />
        <Route path="/:id" exact element={<Product />} />

      </Routes>

    </div >
  );
}

export default App;
