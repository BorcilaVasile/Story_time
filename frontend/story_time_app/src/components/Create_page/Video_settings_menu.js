import React from "react";
import { useState } from "react";
import "./Video_settings_menu.css";
import delete_svg from '../../assets/delete.svg';
import add from '../../assets/add.svg';

//frame set generator function
function GenerateFrameSet({value, isActive, onClick }) {

  const [ showFrameSettings, setShowFrameSettings ] = useState(false);
  const showFrameButtons = () => {
    setShowFrameSettings(!showFrameSettings);
  };

  return (
    <div className={`frame_settings ${isActive ? 'pressed' : ''}`} 
    role='button' 
    onClick={() => {onClick(value);}}>
      <div className='frame_set' role='button' onClick={showFrameButtons}>
        Frame set {value}
      </div>
      { showFrameSettings && ( 
      <div className='frame_settings_buttons'>
        <div className='voice_settings' role='button'> Voice </div>
        <div className='surroundings_settings' role='button'> Surroundings </div>
        <div className='movement_settings' role='button'> Movement </div>
      </div> )}
    </div>
  );
}

//main function
function VideoSettingsMenu({ onAddFrameSet, onDeleteFrameSet }) {

  const [ activeFrameSet, setActiveFrameSet ] = useState(null);
  const [ frameSets, setFrameSets ] = useState([{ id: 0, name: '0', settings: {} }]);

  //function to add a new frame set
  const handleAddFrameSet = () => {
    const newId = frameSets.length > 0 ? Math.max(...frameSets.map(f => f.id)) + 1 : 0;
    const newFrameSet = { id: newId, name: `${newId}`, settings: {} };
    setFrameSets([...frameSets, newFrameSet]);
    
    if (onAddFrameSet) {
      onAddFrameSet();
    }
  };

  //function to handle frame click
  const handleFrameClick = (id) => {
    if (activeFrameSet === id) {
      return;
    }
    setActiveFrameSet(id);
  };

  //function to delete a frame set
  const handleDeleteFrameSet = () => {
    if ( activeFrameSet === null ) {
      return;
    }
    const updatedFrameSets = frameSets.filter(frame => frame.id !== activeFrameSet); 
    setFrameSets(updatedFrameSets);
    setActiveFrameSet(null);
    
    if( onDeleteFrameSet){
      onDeleteFrameSet();
    }
  };
  return (
    <div className='video_settings_menu'>
      <div className='video_settings_menu_title'>Video settings</div>
      <line className='video_settings_menu_line'></line>
      <div className='video_settings_menu_content'>
        <div className='menu_content'>
        {frameSets.map((frame) => (
            <GenerateFrameSet
              value={frame.name}
              key={frame.id}
              isActive={activeFrameSet === frame.id} // Verifică dacă este activ
              onClick={() => handleFrameClick(frame.id)} // Transmite funcția onClick
            />
          ))}
        </div>
        <div className='frame_add_delete_container'> 
          <div className='add_frame_set_button' role='button' onClick={handleAddFrameSet}>
            <img src={add} alt='Add a new frame set' className='add_icon'/>
            <div className='add_frame_set_text'>Add a new frame set</div>
          </div>
          <div className='delete_frame_set_button' role='button' onClick={handleDeleteFrameSet}>
            <img src={delete_svg} alt='delete' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoSettingsMenu;
