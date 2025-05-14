import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Project';
import Contact from './components/Contact';

function App() {
  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        <Home/>
        <About/>
        <Projects/>
        <Contact/>
      </main>
    </div>
  );
}

export default App;
