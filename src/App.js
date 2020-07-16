import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ButtonAppBar from './components/Header';
import { Home } from './components/Home';
import About from './components/About';
import { LadiesProducts } from './components/LadiesProducts';
import { ProductIndex } from './components/ProductIndex';
import { ProductDetails } from './components/ProductDetails';
import NotFound from './components/NotFound';
import { MensProducts } from './components/MensProducts';
import { MensProductIndex } from './components/MensProductIndex';
import { MensProductDetails } from './components/MensProductDetails';
import { KidsProducts } from './components/KidsProducts';
import { KidsProductIndex } from './components/KidsProductIndex';
import {KidsProductDetails } from './components/KidsProductDetails';
//import PageBuilder from './components/PageBuilder';
// import {Header} from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <ButtonAppBar />

      <Routes>
        <Route path="/" element={<Home />}> </Route>

        <Route path="LadiesProducts" element={<LadiesProducts />}>
          <Route path="/" element={<ProductIndex />}> </Route>
          <Route path=":ProductID" element={<ProductDetails />}> </Route>
        </Route>

        <Route path="MensProducts" element={<MensProducts />}>
          <Route path="/" element={<MensProductIndex />}> </Route>
          <Route path=":ProductID" element={<MensProductDetails />}> </Route>
        </Route>

        <Route path="KidsProducts" element={<KidsProducts />}>
          <Route path="/" element={<KidsProductIndex />}> </Route>
          <Route path=":ProductID" element={<KidsProductDetails />}> </Route>
        </Route>

        <Route path="about" element={<About/>}> </Route>

        <Route path="*" element={<NotFound />}> </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
