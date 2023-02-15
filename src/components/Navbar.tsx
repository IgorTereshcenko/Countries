import React from 'react';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { set } from '../store/slices/themeSlice';
import '../style/navbar.scss';

const Navbar = () => {

    const {theme} = useAppSelector(state => state.themeReducer);
    const dispatch = useAppDispatch();

    useEffect(() => {
        document.documentElement.dataset.theme = theme;
        localStorage.setItem('theme', theme);
    }, [theme])
  
    const handleChange = () => {
        const next = theme === 'dark' ? 'light' : 'dark';
        dispatch(set(next));
    }

    return (
        <div className='navbar'>
            <div className="navbar__title">Where in the world?</div>
            <button 
                onClick={handleChange} 
                className='navbar__theme'>{theme === 'dark' ? 'White Mode' : 'Dark Mode'}</button>
        </div>
    )
}

export default Navbar;
