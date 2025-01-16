import './App.css'
import React from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

const App = () => {
  return (
    <div>
      <NavBar />
      <ItemListContainer mensaje="¡Bienvenidos a nuestra tienda!" />
    </div>
  );
};

export default App;



