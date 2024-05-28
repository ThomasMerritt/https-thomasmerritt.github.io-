import React from 'react';

const ImageText = ({ id, image, title, subtitle, description }) => {
    return (
        <div id={id} className='image-text-section'>
            <div className='image-text-section-left'>
                <img className='image-text-section-image' src={image} alt='image-text' />
            </div>
            <div className='image-text-section-right'>
                <div className='image-text-section-right-items'>
                    <h1 className='image-text-section-text'>{title}</h1>
                    <h3 className='image-text-section-text'>{subtitle}</h3>
                    {description.map((text, index) => (
                        <p key={index} className='image-text-section-text'>{text}</p>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ImageText;
