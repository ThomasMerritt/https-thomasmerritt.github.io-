import React from 'react';

const TextImage = ({ id, image, aboutContent, borderRadius, width, height }) => {
    return (
        <div id={id} className='text-image-section'>
            <div className='text-image-section-right'>
                <div className='text-image-section-right-items'>
                    {aboutContent.map((section, index) => (
                        <div key={index}>
                            <h1 className='text-image-section-text'>{section.title}</h1>
                            {section.paragraphs.map((text, idx) => (
                                <p key={idx} className='text-image-section-text'>{text}</p>
                            ))}
                        </div>
                    ))}
                    <div className='button-container'>
                        <button className='resume-button'>RESUME</button>
                    </div>
                </div>
            </div>
            <div className='text-image-section-left'>
                <img className='text-image-section-image' style={{ borderRadius: borderRadius, width: width, height: height }}
                 src={image} alt='about' />
            </div>
        </div>
    );
};

export default TextImage;