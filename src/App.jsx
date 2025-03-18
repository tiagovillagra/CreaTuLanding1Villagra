import './App.css'
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';




const App = () => {
  return (
    <>
    <header>
    <NavBar/>
    </header>
    <ItemListContainer texto="Bienvenidos a mi e-ecomerce"/>
    </>
  );
};

export default App;



