import Message from './components/component/Message.js';
import './App.css';

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Какой-то чат</h1>
        <p className="App-text"> Привет, {props.name}</p>
        <Message />
      </header>
    </div>
  );
}

export default App;
