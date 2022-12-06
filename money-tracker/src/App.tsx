import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from './modules/HomePage';
import { ProductPage } from './modules/ProductPage';
import { RegisterPage } from './modules/RegisterPage';
import { TokenProvider } from './modules/TokenContext';


function App() {
  

  return (
    <>
      
        <TokenProvider >
          <BrowserRouter>
            <Routes>
              <Route path="/" element = {<HomePage/>}/>
              <Route path="/register" element = {<RegisterPage/>}/>
              <Route path="/product/:productId" element = {<ProductPage/>}/>
            </Routes>
        
          </BrowserRouter>
        </TokenProvider>
  </>
  );
}

export default App;
