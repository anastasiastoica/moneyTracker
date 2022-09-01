import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import { HomePage } from './modules/HomePage';
import { ExpensesPage } from './modules/ExpensesPage';
import { ErrorPage } from './modules/ErrorPage';
import { IncomesPage } from './modules/IncomesPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HomePage1 } from './modules/HomePage1';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<HomePage1/>}/>
    <Route path="/money" element={<ExpensesPage/>}/>
    <Route path="/*" element={<ErrorPage/>}/>
    <Route path="/add" element={<IncomesPage/>}/>
  </Routes>
  </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
