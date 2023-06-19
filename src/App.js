import React from 'react';
import Navbar from './components/Navbar';
import Main from './components/Main';
import './styles/App.css';

const App = () => {
    return (
        <div className='App'>
            <Navbar />
            <Main />
        </div>
    );
};

export default App;