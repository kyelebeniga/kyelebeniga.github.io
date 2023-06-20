import React from 'react';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Contact from './components/Contact';
import './styles/App.css';

const App = () => {
    return (
        <div className='App'>
            <Navbar />
            <Main />
            <Contact />
        </div>
    );
};

export default App;