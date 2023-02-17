import React, { FC } from 'react';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { set } from '../store/slices/themeSlice';
import '../style/navbar.scss';
import sun from '../resurses/sun.svg';
import moon from '../resurses/moon.svg';

const Navbar:FC = () => {

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
                className='navbar__theme'>
                <img src={theme === 'dark' ? sun : moon} alt="sun and moon" />
                {theme === 'dark' ? 'White Mode' : 'Dark Mode'}
            </button>
        </div>
    )
}

export default Navbar;
