import './App.css';
import About from './components/About/About';
import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';
import Protfolio from './components/Protfolio/Protfolio';
import Resume from './components/Resume/Resume';
import Services from './components/Services/Services';
import Sidebar from './components/sidebar/Sidebar';

import Home from './Pages/Home/Home';

function App() {
  return (
    <>
    <Sidebar />
    <main className='main'>
      <Home />
      <About />
      <Services />
      <Resume />
      <Protfolio />
      <Blog />
      <Contact />
    </main>
    </>
  );
}

export default App;
