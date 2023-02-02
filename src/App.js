import './stylesheets/App.css';
import Bio from './components/Bio'
import Projects from './components/Projects';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Bio />
        <Projects />
      </header>
    </div>
  );
}

export default App;
