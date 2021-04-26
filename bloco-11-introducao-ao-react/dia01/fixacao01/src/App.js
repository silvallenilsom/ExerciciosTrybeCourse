import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div>
          <h1>Lenilsom Ferreira da Silva</h1>
          <p>
          Eu tenho 37 anos, sou casado a 13 e tenho tres filhos, Adam, Sara e Isis. Minha esposa se chama Danielle e namoramos a quase 20 anos. Somos muito felizes por tudo que conquistamos juntos.
          </p>
        </div>
      </header>
    </div>
  );
}

export default App;
