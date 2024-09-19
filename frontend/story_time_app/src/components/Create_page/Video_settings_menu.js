import React from "react";
import "./Video_settings_menu.css";
import { Button } from "react-bootstrap";
import search from '../../assets/search.svg';

function VideoSettingsMenu() {
  return (
    <div className='video_settings_menu'>
      <div className='video_settings_menu_title'>Video settings</div>
      <div className='video_settings_menu_content'>
        <div className='menu_content'></div>
        <Button className='add_frame_set_button' onClick={() => console.log('add frame set')}>
          <span>Add frame set</span>
        </Button>
      </div>
    </div>
  );
}

export default VideoSettingsMenu;
