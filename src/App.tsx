import React from 'react';
import Navbar from './components/Navbar';
import Countries from './pages/Countries';
import './style/app.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CountriesName from './pages/CountriesName';
import Error from './pages/Error';

const App = () => {

    return (
        <Router>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Countries/>}/>
                <Route path='/name/:name' element={<CountriesName/>}/>
                {<Route path='/*' element={<Error/>}/>}
            </Routes>
        </Router>       
    )
}

export default App;