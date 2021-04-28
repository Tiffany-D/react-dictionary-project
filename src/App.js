import Dictionary from "./Dictionary";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <i class="fas fa-book"></i>
        <h1>
          Dictionary
        </h1>
        <p>
          What is the word ? 
       </p>
      </header>
      <main>
        <Dictionary />
      </main>
      <footer>
        Coded by Tiffany D. <a href="https://github.com/Tiffany-D/react-dictionary-project">on Github</a>
      </footer>
    </div>
  );
}

export default App;
