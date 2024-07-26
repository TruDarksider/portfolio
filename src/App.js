import './stylesheets/App.css';
import Header from './components/Header'
import Bio from './components/Bio'
import Projects from './components/Projects';
import Footer from './components/Footer'

function App() {

  return (
    <div className="flex-col"> {/* classname="App" */}
      <Header />  
      <Bio />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
