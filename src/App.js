import './App.css';
import NavBar from'./components/NavBar/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Productos from './views/Productos/Productos';
import Favoritos from './views/Favoritos/Favoritos';
import Buscar from './views/Buscar/Buscar'
import ItemsDetails from './views/ItemsDetails/ItemsDetails';

function App() {
    return (
      <Router>
        <div className="App">
          <NavBar/ >
          <Routes>
            <Route path='/' element={<Productos />} />
            <Route path='/favoritos' element={<Favoritos />} />
            <Route path='/buscar' element={<Buscar />} />
            <Route path='/detail/:id' element={<ItemsDetails />} />
          </Routes>
        </div>         
     </Router>       
    );
  }

export default App;
