import './stylesheets/App.css';
import Header from './components/Header'
import Bio from './components/Bio'
import Projects from './components/Projects';
import Footer from './components/Footer'

function App() {

  return (
    <div className="App">
      {/* <header className="App-header"> */}
      <Header />  
      <Bio />
        <Projects />
        <Footer />
      {/* </header> */}
    </div>
  );
}

export default App;
