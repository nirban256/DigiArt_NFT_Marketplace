import React from 'react';

const Image = ({ heroImage, hero, title, creator }) => {
    return (
        <div className='w-1/3'>
            <img src={heroImage} alt={hero} />
            <h5>{title}</h5>
            <span>{creator}</span>
        </div>
    )
}

export default Image
