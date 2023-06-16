import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Control from './components/Control';

function App() {
  return (
    <div className="App h-screen flex flex-col">
      <Navbar />
      <Control />
      <Footer />
    </div>
  );
}

export default App;