import React, { useState } from 'react';
import search from '../../assets/search.svg';
import './Examples.css';

const videoSources = [
    'https://www.youtube.com/embed/7e90gBu4pas',
    'https://www.youtube.com/embed/another-video-id',
    'https://www.youtube.com/embed/yet-another-video-id',
];

function Examples() {
    const [activeVideo, setActiveVideo] = useState(null);

    const handleVideoClick = (index) => {
        setActiveVideo(index);
    };

    const handleOverlayClick = () => {
        setActiveVideo(null); // Reset to null to close the active video
    };

    return (
        <div className={`examples ${activeVideo !== null ? 'overlay-active' : ''}`}>
            <div className='examples_search_bar'>
                <input type="text" placeholder='Search examples' />
                <img src={search} alt='search' className='search_icon' />
            </div>
            <div className='examples_container'>
                <div className='example_wrapper'>
                    {videoSources.map((src, index) => (
                        <div
                            className={`video_wrapper ${activeVideo === index ? 'active' : ''}`}
                            key={index}
                            onClick={() => handleVideoClick(index)}
                        >
                            <iframe
                                src={src}
                                title={`video-${index}`}
                                frameBorder='0'
                                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                                allowFullScreen>
                            </iframe>
                            <div className='example_name'>
                                How to create your first video
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {activeVideo !== null && <div className='overlay' onClick={handleOverlayClick}></div>}
        </div>
    );
}

export default Examples;
