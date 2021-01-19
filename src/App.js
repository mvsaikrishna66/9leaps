import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Mainblock from './components/Mainblock';

function App() {
  return (
    <div className="App"  >
      <Header/>
      <Navbar/>
      <Mainblock month="January" year="2021" name="Your Name" project="RnR" mentor="Pulkit"/>
    </div>
  );
}

export default App;
