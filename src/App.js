import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hola Mundo!
        </p>
        <a
          className="App-link"
          href="https://coderhouse.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Aprendiendo React en CoderHouse
        </a>
      </header>
    </div>
  );
}

export default App;
