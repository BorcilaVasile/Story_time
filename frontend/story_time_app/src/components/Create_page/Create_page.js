import React from 'react';
import './Create_page.css';
import VideoSettingsMenu from './Video_settings_menu';
import VideoSection from './Video_section';


function Createpage(){
    return (
        <div className='create_page'>
            <div className='top_row'>
                <VideoSettingsMenu />
                <VideoSection />
            </div>
            <div className='down_row'>
                <button className='button'>Add a new character</button>
                <button className='button'>Add a new decorative item</button>
                <button className='button'>Add a new sound</button>
                <button className='button'>Save</button>
                <button className='button'>Delete</button>
                <button className='download_button'>Download</button>
            </div>
        </div>
    );
}


export default Createpage;