import React from 'react';
import Navbar from './components/Navbar';
import Countries from './pages/Countries';
import './style/app.scss';

const App = () => {

    return (
        
        <div className="app">
           <Navbar/>
           <Countries/> 
        </div>     
    )
}

export default App;