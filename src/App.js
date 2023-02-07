import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Control from './components/Control';

function App() {
  return (
    <div className="App max-w-screen-xl absolute">
      <Navbar />
      <Control />
      <Footer />
    </div>
  );
}

export default App;