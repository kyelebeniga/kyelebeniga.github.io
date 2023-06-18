import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import './styles/App.css';

const App = () => {
    return (
        <div className='App'>
            <Navbar />
            <Home />
            <About />
        </div>
    );
};

export default App;