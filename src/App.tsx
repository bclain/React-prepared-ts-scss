import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Saved from "./pages/Saved";
import Home from "./pages/Home";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/saved" element={<Saved />} />
       {/* path="*" renvoie si l'adresse ne correspond a rien (erreur 404)*/}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
