import './App.css';

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
    </div>
  )
}

export default App;
