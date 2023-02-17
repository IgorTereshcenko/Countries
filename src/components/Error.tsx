import React, { FC } from 'react'
import error from '../resurses/error.svg';

const Error:FC = () => {

    return (
        <div className='error' style={
            {
                'display' : 'flex',
                'justifyContent': 'center',
                'flexDirection': 'column',
                'gap': '20px'
            }
        }>
            <img src={error} alt="error" />
            <h2>Упс, произошла ошибка при загрузке, попробуйте позже</h2>
        </div>
    )
}

export default Error;
