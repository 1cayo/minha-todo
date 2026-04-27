import { useState } from 'react';
import './App.css';

function App() {
  const [tarefas, setTarefas] = useState([]);
  const [input, setInput] = useState("");

  function adicionarTarefa() {
    if (input.trim()) {
      setTarefas([...tarefas, input.trim()]);
      setInput("");
    }
  }

  function removerTarefa(index) {
    setTarefas(tarefas.filter((_, i) => i !== index));
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") adicionarTarefa();
  }

  return (
    <div className="container">
      <h1>Minha Lista de Tarefas</h1>
      <div className="input-area">
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Nova tarefa..."
        />
        <button onClick={adicionarTarefa}>Adicionar</button>
      </div>
      {tarefas.length === 0 && <p className="vazia">Nenhuma tarefa ainda</p>}
      <ul>
        {tarefas.map((tarefa, index) => (
          <li key={index}>
            <span>{tarefa}</span>
            <button className="remover" onClick={() => removerTarefa(index)}>✕</button>
          </li>
        ))}
      </ul>
      {tarefas.length > 0 && <p className="contador">{tarefas.length} tarefa(s)</p>}
    </div>
  );
}

export default App;