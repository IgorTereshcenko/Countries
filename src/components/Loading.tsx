import React, { FC } from 'react'
import loading from '../resurses/loading.svg';

const Loading:FC = () => {

    return (
        <div className='loading' style={{display: 'flex', justifyContent: 'center'}}>
            <img src={loading} alt="загрузка" />
        </div>
    )
}

export default Loading;
