import './App.css';
import Form from './components/Form';
import Cart from './components/Cart';

function App() {
  return (
    <main className="App">
      <h1>Checkout</h1>
      <div className="app-grid">
        <Form />
        <Cart />
      </div>
    </main>
  );
}

export default App;
