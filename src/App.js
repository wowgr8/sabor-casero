import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Menu from './components/Menu';
import Visit from './components/Visit';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App max-w-screen-xl absolute">
      <Navbar />
      <Hero />
      <Menu />
      <Visit />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;