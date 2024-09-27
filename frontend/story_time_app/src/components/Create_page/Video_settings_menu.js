import React from "react";
import "./Video_settings_menu.css";
import { Button } from "react-bootstrap";
import search from '../../assets/search.svg';

function generateFrameSet(value) {
  return (
    <div className='frame_set' role='button'>
      Frame set {value}
    </div>
  );
}

function VideoSettingsMenu() {
  const frameSets = [];
  for (let i = 0; i < 10; i++) {
    frameSets.push(generateFrameSet(i));
  }

  return (
    <div className='video_settings_menu'>
      <div className='video_settings_menu_title'>Video settings</div>
      <line className='video_settings_menu_line'></line>
      <div className='video_settings_menu_content'>
        <div className='menu_content'>
            {frameSets}
        </div>
        <Button className='add_frame_set_button' onClick={() => console.log('add frame set')}>
          <span>Add frame set</span>
        </Button>
      </div>
    </div>
  );
}

export default VideoSettingsMenu;
