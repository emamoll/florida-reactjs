import './App.css';
import NavBar from'./components/NavBar/NavBar';
// import ItemList from './components/ItemListContainer/ItemList/ItemList';
import ItemDetail from './components/ItemDetailContainer/ItemDetail/ItemDetail';

function App() {
  return (
    <div className="App">
      <NavBar/ >
      {/* <ItemList /> */}
      <ItemDetail />
    </div>
  );
}

export default App;
