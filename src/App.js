import './App.css';
import NavBar from'./components/NavBar/NavBar';
import ItemCount from './components/ItemCount/ItemCount';

function App() {
  return (
    <div className="App">
      <NavBar/ >
      <ItemCount stock="8" />
    </div>
  );
}

export default App;
