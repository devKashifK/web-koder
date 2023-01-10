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
    <div className="blur" style={{
        background : "var(--blur2)",
        top : "05%",
        width: "50rem",
        height: "11rem"
      }}></div>
         <div className="blur" style={{
        background : "var(--blur)",
        top : "0%",
        width: "40rem",
        height: "11rem",
        left: "-05rem",
        zIndex : "10"
      }}></div>
       <div className="blur" style={{
        background : "var(--blur3)",
        top : "12%",
        width: "50rem",
        height: "11rem",
        left: "-15rem",
        zIndex : "10"
      }}></div>
        <div className="blur" style={{
        background : "var(--blur2)",
        top : "20%",
        width: "50rem",
        height: "11rem",
        zIndex : "10"
      }}></div>
         <div className="blur" style={{
        background : "var(--blur)",
        top : "28%",
        width: "40rem",
        height: "11rem",
        left: "-05rem",
        zIndex : "10"
      }}></div>
       <div className="blur" style={{
        background : "var(--blur3)",
        top : "40%",
        width: "50rem",
        height: "11rem",
        left: "-15rem",
        zIndex : "10"
      }}></div>
        <div className="blur" style={{
        background : "var(--blur2)",
        top : "35%",
        width: "50rem",
        height: "11rem"
      }}></div>
         <div className="blur" style={{
        background : "var(--blur)",
        top : "50%",
        width: "40rem",
        height: "11rem",
        left: "-05rem",
      }}></div>
       <div className="blur" style={{
        background : "var(--blur2)",
        top : "54%",
        width: "50rem",
        height: "11rem"
      }}></div>
       <div className="blur" style={{
        background : "var(--blur3)",
        top : "64%",
        width: "50rem",
        height: "11rem",
        left: "-15rem",
      }}></div>
           <div className="blur" style={{
        background : "var(--blur)",
        top : "74%",
        width: "40rem",
        height: "11rem",
        left: "-05rem",
      }}></div>
       <div className="blur" style={{
        background : "var(--blur2)",
        top : "76%",
        width: "50rem",
        height: "11rem"
      }}></div>
        <div className="blur" style={{
        background : "var(--blur2)",
        top : "90%",
        width: "50rem",
        height: "11rem",
      }}></div>
       <div className="blur" style={{
        background : "var(--blur3)",
        top : "95%",
        width: "50rem",
        height: "11rem",
        left: "-15rem",
      }}></div>
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
