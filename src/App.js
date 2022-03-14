import './App.css';
import NavBar from'./components/NavBar/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Productos from './views/Productos/Productos';
import Favoritos from './views/Favoritos/Favoritos';
import Buscar from './views/Buscar/Buscar'
import Carrito from './views/Carritos/Carritos'
import ItemsDetails from './views/ItemsDetails/ItemsDetails';
import Inicio from './views/Inicio/Inicio';
import Formulario from './views/Formulario/Formulario';
import { StateProvider } from './Context/Provider/StateProvider';
import { FavProvider } from './Context/CartContext/FavContext';




function App() {
    return (
      <Router>
        <StateProvider>
          <FavProvider>
            <div className="App">
              <NavBar/ >
              <Routes>
                <Route path='/' element={<Inicio />} />
                <Route path='/productos/:categoria' element={<Productos />} />
                <Route path='/favoritos' element={<Favoritos />} />
                <Route path='/buscar' element={<Buscar />} />
                <Route path='/carrito' element={<Carrito />} />
                <Route path='/detail/:id' element={<ItemsDetails />} />
                <Route path='/formulario' element={<Formulario/>} />
              </Routes>
            </div>
          </FavProvider>
        </StateProvider>         
     </Router>       
    );
  }

export default App;
