import React from 'react';
import './Create_page.css';
import VideoSettingsMenu from './Video_settings_menu';
import VideoSection from './Video_section';
import download from '../../assets/download.svg';

function Createpage(){
    return (
        <div className='create_page'>
            <div className='top_row'>
                <div className='menu'> <VideoSettingsMenu /></div>
                <div className='video'><VideoSection /></div>
            </div>
            <div className='down_row'>
                <div className='button_group'>
                    <button className='button'>Add a new character</button>
                    <button className='button'>Add a new decorative item</button>
                    <button className='button'>Add a new sound</button>
                </div>
                <div className='button_group'>
                    <button className='button'>Save</button>
                    <button className='button'>Delete</button>
                    <button className='download_button'>
                        <img src={download} alt='download' />
                    </button>
                </div>
            </div>
        </div>
    );
}


export default Createpage;