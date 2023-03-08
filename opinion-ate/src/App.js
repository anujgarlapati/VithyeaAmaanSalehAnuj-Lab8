import logo from './logo.svg';
import './App.css';
import Counter from './features/counter/Counter';
import  IncrementByAmount  from './features/counter/IncrementByAmount';




function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Counter app!
        </p>
        <a
          className="App-link"
         
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* <Counter/>   */}
          <IncrementByAmount/> 

        </a>
      </header>
    </div>
  );
}

export default App;
