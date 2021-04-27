import './App.css';
import Component1 from './Component1'

const tarefas = ['Lavar o carro', 'concertar bicicleta', 'passear com cachorro', 'pagar contas']

const task = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  return (
    <div className='App-header'>
      <h1 >Lista de tarefas</h1>
      <ul>{tarefas.map((tarefa) => task(tarefa))}</ul>
      <Component1 />
    </div>
  )
}

export default App;
