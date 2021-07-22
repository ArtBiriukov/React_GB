import Message from './components/component/Message.js';
import './App.css';

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Это первое приложение на Реакте</h1>
        <p className="App-text"> Привет, {props.name}</p>
        <Message text ="Текст в компаненте Massage" />
      </header>
    </div>
  );
}

export default App;
