import React, { FC } from 'react'
import { Link } from 'react-router-dom';

const Error:FC = () => {

    return (
        <div style={
            {
            'display': 'flex',
            'justifyContent': 'center',
            'marginTop': '20px',
            'flexDirection': 'column'
            }}>
            <iframe src="https://giphy.com/embed/H54feNXf6i4eAQubud" width="480" height="405" frameBorder="0" className="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/chicken-bro-H54feNXf6i4eAQubud"></a></p>
            <div>Вы перешли на несуществующую страницу,<Link to='/'>на главную</Link></div>
        </div>
    )
}

export default Error;
